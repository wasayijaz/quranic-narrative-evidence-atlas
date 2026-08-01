import assert from "node:assert/strict";
import { evaluateClaimGate } from "../src/lib/gate.ts";

const claim = {
  id: "ak-test",
  attributions: [{ source: "tabari-jami-al-bayan", edition: "bulaq-amiriyya" }],
};

const baseRow = {
  claim: "ak-test",
  source: "tabari-jami-al-bayan",
  edition: "bulaq-amiriyya",
  checked_by: "",
  date_checked: "",
  superseded_by: null,
};

const unlocated = evaluateClaimGate(claim, [{ ...baseRow, located: "no" }]);
assert.equal(unlocated.state, "unlocated");
assert.equal(unlocated.publishable, false);

const verified = evaluateClaimGate(claim, [
  { ...baseRow, located: "yes", checked_by: "owner", date_checked: "2026-08-01" },
]);
assert.equal(verified.state, "verified");
assert.equal(verified.publishable, true);

const missing = evaluateClaimGate(claim, []);
assert.equal(missing.state, "blocked");
assert.equal(missing.publishable, false);
assert.match(missing.issues[0].message, /no row/);

console.log("Gate transition tests passed: no -> withheld, yes -> publishable, missing -> hard failure.");
