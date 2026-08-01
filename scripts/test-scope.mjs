import assert from "node:assert/strict";
import { belongsToDossier } from "../src/lib/content-scope.ts";

assert.equal(
  belongsToDossier(
    { id: "dossiers/ashab-al-kahf/claims/ak-001", filePath: "D:\\project\\content\\dossiers\\ashab-al-kahf\\claims\\ak-001.yml" },
    "ashab-al-kahf",
  ),
  true,
);
assert.equal(
  belongsToDossier({ id: "dossiers/yusuf/claims/y-001" }, "ashab-al-kahf"),
  false,
);
assert.equal(
  belongsToDossier({ id: "ashab-al-kahf/ledger" }, "ashab-al-kahf"),
  true,
);

console.log("Scope tests passed.");
