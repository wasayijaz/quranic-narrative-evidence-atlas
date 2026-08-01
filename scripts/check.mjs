import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import { evaluateClaims } from "../src/lib/gate.ts";
import { findIntegrityErrors } from "../src/lib/integrity.ts";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const contentRoot = path.join(projectRoot, "..", "content");

async function yamlFiles(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await yamlFiles(entryPath)));
      } else if (entry.isFile() && entry.name.endsWith(".yml")) {
        files.push(entryPath);
      }
    }

    return files;
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function readYaml(filePath) {
  const relativePath = path
    .relative(path.join(projectRoot, ".."), filePath)
    .split(path.sep)
    .join("/");
  const text = await readFile(filePath, "utf8");

  try {
    return { filePath, relativePath, data: parse(text) };
  } catch (error) {
    throw new Error(`Invalid YAML in ${relativePath}: ${error.message}`);
  }
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

const errors = [];

try {
  const allFiles = await yamlFiles(contentRoot);
  const entries = await Promise.all(allFiles.map(readYaml));
  const sources = entries.filter(({ relativePath }) => relativePath.startsWith("content/sources/"));
  const claims = entries.filter(({ relativePath }) => /content\/dossiers\/[^/]+\/claims\/[^/]+\.yml$/.test(relativePath));
  const ledgers = entries.filter(({ relativePath }) => /content\/dossiers\/[^/]+\/ledger\.yml$/.test(relativePath));

  for (const entry of [...sources, ...claims]) {
    if (!isObject(entry.data)) {
      errors.push(`${entry.relativePath} must contain one YAML object.`);
    }
  }

  for (const entry of ledgers) {
    if (!Array.isArray(entry.data)) {
      errors.push(`${entry.relativePath} must contain a top-level YAML list of ledger rows.`);
    }
  }

  if (errors.length === 0) {
    const sourceData = sources.map(({ data }) => data);
    const claimData = claims.map(({ data }) => data);
    const ledgerRows = ledgers.flatMap(({ data }) => (Array.isArray(data) ? data : []));

    errors.push(...findIntegrityErrors({ sources: sourceData, claims: claimData, ledgerRows }));

    const gateResults = evaluateClaims(claimData, ledgerRows);
    for (const result of gateResults) {
      errors.push(...result.issues.map((issue) => issue.message));
    }
  }
} catch (error) {
  errors.push(error.message);
}

if (errors.length > 0) {
  console.error("Build blocked by the Quran project integrity gate.");
  for (const error of [...new Set(errors)]) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Integrity gate passed: no hard failures found.");
