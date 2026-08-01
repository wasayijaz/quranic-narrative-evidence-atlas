import assert from "node:assert/strict";
import { findIntegrityErrors } from "../src/lib/integrity.ts";

const sources = [
  { id: "tabari-jami-al-bayan", edition: { id: "bulaq-amiriyya" } },
];
const claims = [
  {
    id: "ak-test",
    attributions: [{ source: "tabari-jami-al-bayan", edition: "bulaq-amiriyya", page: 64 }],
  },
];

const validRow = {
  claim: "ak-test",
  source: "tabari-jami-al-bayan",
  edition: "bulaq-amiriyya",
};
assert.deepEqual(findIntegrityErrors({ sources, claims, ledgerRows: [validRow] }), []);

const badSource = findIntegrityErrors({
  sources,
  claims,
  ledgerRows: [{ ...validRow, source: "missing-source" }],
});
assert.match(badSource[0], /no source record exists/);

const badEdition = findIntegrityErrors({
  sources,
  claims,
  ledgerRows: [{ ...validRow, edition: "missing-edition" }],
});
assert.match(badEdition[0], /edition is not in the source registry/);

const mismatchedClaim = findIntegrityErrors({
  sources,
  claims,
  ledgerRows: [{ ...validRow, edition: "bulaq-amiriyya" }],
});
assert.equal(mismatchedClaim.length, 0);

console.log("Integrity tests passed: ledger source, edition, and claim references are checked together.");
