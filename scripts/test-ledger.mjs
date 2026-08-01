import assert from "node:assert/strict";
import { correctionRows } from "../src/lib/ledger.ts";

const rows = [
  {
    claim: "ak-test",
    source: "tabari-jami-al-bayan",
    edition: "bulaq-amiriyya",
    located: "no",
    checked_by: "",
    date_checked: "",
    notes: "Initial candidate page.",
    superseded_by: "ak-test-correction",
  },
  {
    claim: "ak-test",
    source: "tabari-jami-al-bayan",
    edition: "bulaq-amiriyya",
    located: "no",
    checked_by: "",
    date_checked: "",
    notes: "Current row.",
    superseded_by: null,
  },
];

const corrections = correctionRows(rows);
assert.equal(corrections.length, 1);
assert.equal(corrections[0].superseded_by, "ak-test-correction");

console.log("Ledger correction test passed: superseded rows are retained for the correction log.");
