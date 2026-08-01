import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import { evaluateClaimGate } from "../src/lib/gate.ts";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distRoot = path.join(projectRoot, "..", "dist");
const claimsRoot = path.join(projectRoot, "..", "content", "dossiers", "ashab-al-kahf", "claims");
const ledgerPath = path.join(projectRoot, "..", "content", "dossiers", "ashab-al-kahf", "ledger.yml");

async function readText(filePath) {
  return readFile(filePath, "utf8");
}

function assertIncludes(text, needle, message) {
  assert.equal(text.includes(needle), true, message);
}

const [englishDossier, urduDossier, englishVerification, urduVerification, ledgerText] = await Promise.all([
  readText(path.join(distRoot, "en", "ashab-al-kahf", "index.html")),
  readText(path.join(distRoot, "ur", "ashab-al-kahf", "index.html")),
  readText(path.join(distRoot, "en", "verification", "index.html")),
  readText(path.join(distRoot, "ur", "verification", "index.html")),
  readText(ledgerPath),
]);

assertIncludes(englishDossier, "Not reviewed by a scholarly board", "English dossier disclosure is missing.");
assertIncludes(urduDossier, "اس مواد کو کسی علمی بورڈ نے نہیں پرکھا", "Urdu dossier disclosure is missing.");
assertIncludes(englishVerification, "Parity gaps", "English parity metric is missing.");
assertIncludes(urduVerification, "تکمیلی فرق", "Urdu parity metric is missing.");
assertIncludes(englishVerification, "Source class", "English claim source-class field is missing.");
assertIncludes(urduVerification, "ماخذ کی قسم", "Urdu claim source-class field is missing.");
assertIncludes(englishVerification, "Shia source", "English Shia parity lane is missing.");
assertIncludes(urduVerification, "شیعی ماخذ", "Urdu Shia parity lane is missing.");

const ledgerRows = parse(ledgerText);
const claimFiles = (await readdir(claimsRoot)).filter((file) => file.endsWith(".yml")).sort();
assert.equal(claimFiles.length, 10, "The rendered regression check expects the ten-claim M0 batch.");

for (const file of claimFiles) {
  const claim = parse(await readText(path.join(claimsRoot, file)));
  const result = evaluateClaimGate(claim, ledgerRows);
  if (result.publishable) {
    assertIncludes(englishDossier, claim.statement.en, `${claim.id} should be visible in the English reading.`);
    assertIncludes(urduDossier, claim.statement.ur, `${claim.id} should be visible in the Urdu reading.`);
  } else {
    assert.equal(englishDossier.includes(claim.statement.en), false, `${claim.id} leaked into the English reading.`);
    assert.equal(urduDossier.includes(claim.statement.ur), false, `${claim.id} leaked into the Urdu reading.`);
  }
}

console.log("Rendered checks passed: routes, disclosure, parity lanes, and gate-safe claim prose are verified.");
