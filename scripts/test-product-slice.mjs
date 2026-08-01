import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import { evaluateClaimGate } from "../src/lib/gate.ts";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distRoot = path.join(projectRoot, "..", "dist");

async function readRoute(lang, route = "") {
  return readFile(path.join(distRoot, lang, route, "index.html"), "utf8");
}

function assertIncludes(text, needle, message) {
  assert.equal(text.includes(needle), true, message);
}

const routes = {};
for (const lang of ["en", "ur"]) {
  for (const route of ["", "quran", "learn", "teach", "research"]) {
    routes[`${lang}/${route || "explore"}`] = await readRoute(lang, route);
  }
}

const englishExplore = routes["en/explore"];
const englishLearn = routes["en/learn"];
const englishQuran = routes["en/quran"];
const englishTeach = routes["en/teach"];
const englishResearch = routes["en/research"];
const englishVerification = await readRoute("en", "verification");
const urduLearn = routes["ur/learn"];
const urduResearch = routes["ur/research"];

for (const [key, html] of Object.entries(routes)) {
  const lang = key.slice(0, 2);
  assertIncludes(html, `/${lang}/learn`, `${key} is missing the Learn route.`);
  assertIncludes(html, `/${lang}/research`, `${key} is missing the Research route.`);
  assertIncludes(html, "resource-disclosure", `${key} is missing the source disclosure.`);
}

assertIncludes(englishExplore, "Read the story. Keep the source in view.", "Explore hero is missing.");
assertIncludes(englishExplore, "Story Canvas", "Explore page is missing the Story Canvas entry point.");
assertIncludes(englishExplore, "Teacher Studio", "Explore page is missing the Teacher Studio entry point.");
assertIncludes(englishExplore, "Evidence Desk", "Explore page is missing the Evidence Desk entry point.");

for (const reference of ["18:9", "18:10?12", "18:16", "18:17?18", "18:19?21", "18:22"]) {
  assertIncludes(englishLearn, reference, `Story Canvas is missing Quran anchor ${reference}.`);
  assertIncludes(englishQuran, reference, `Quran route is missing anchor ${reference}.`);
}

assertIncludes(englishTeach, "data-lesson-block", "Teacher Studio has no selectable lesson blocks.");
assert.equal((englishTeach.match(/type="checkbox" data-lesson-block/g) ?? []).length, 6, "Teacher Studio should expose all six Quran-anchored blocks.");
assertIncludes(englishTeach, "data-lesson-outline", "Teacher Studio is missing its live selected-beat outline.");
assertIncludes(englishTeach, "data-block-title", "Teacher Studio blocks are missing their outline data.");
assertIncludes(englishTeach, "local outline", "Teacher Studio must explain that the workspace is local.");
assertIncludes(englishResearch, "Evidence Desk", "Research hero is missing.");
assertIncludes(englishResearch, "Source registry", "Research page is missing the source registry.");
assertIncludes(englishResearch, "Shia source", "Research page is missing the labelled Shia lane.");
assertIncludes(englishResearch, "Unlocated", "Research page is missing the active ledger state.");
assertIncludes(englishResearch, "data-research-filter", "Research page is missing the claim filter.");
assertIncludes(englishResearch, "/en/learn#ak-beat-03", "Research page is missing the story-beat deep link.");
assertIncludes(englishVerification, "id=" + '"ak-001"', "Verification page is missing claim deep-link anchors.");
assertIncludes(englishLearn, "/en/quran#ak-beat-01", "Story Canvas is missing the internal Quran-anchor link.");
assertIncludes(englishQuran, "id=" + '"ak-beat-01"', "Quran page is missing anchor ids.");
assertIncludes(urduLearn, "????? ?????", "Urdu Story Canvas is missing native Quran anchor copy.");
assertIncludes(urduResearch, "????? ???", "Urdu Research page is missing native evidence-desk copy.");

const claim = parse(await readFile(path.join(projectRoot, "..", "content", "dossiers", "ashab-al-kahf", "claims", "ak-001.yml"), "utf8"));
const ledger = parse(await readFile(path.join(projectRoot, "..", "content", "dossiers", "ashab-al-kahf", "ledger.yml"), "utf8"));
const gate = evaluateClaimGate(claim, ledger);
if (!gate.publishable) {
  for (const [key, html] of Object.entries({ "en/learn": englishLearn, "en/teach": englishTeach, "en/research": englishResearch })) {
    assert.equal(html.includes(claim.statement.en), false, `${key} leaked an unlocated claim into public prose.`);
  }
}

console.log("Product-slice checks passed: Explore, Quran, Learn, Teach, Research, anchors, disclosure, and withheld claims are verified.");
