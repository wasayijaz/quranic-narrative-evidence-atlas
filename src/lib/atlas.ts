import { getCollection } from "astro:content";
import { evaluateClaims, verificationSummary, type ClaimGateResult } from "./gate";
import { belongsToDossier } from "./content-scope";
import { correctionRows } from "./ledger";

export type AtlasLocale = "en" | "ur";

export async function loadAtlas(dossierId = "ashab-al-kahf") {
  const [claimEntries, ledgerEntries, sourceEntries, dossierEntries] = await Promise.all([
    getCollection("claims"),
    getCollection("ledgers"),
    getCollection("sources"),
    getCollection("dossiers"),
  ]);

  const claims = claimEntries
    .filter((entry) => belongsToDossier(entry, dossierId))
    .map((entry) => entry.data);
  const ledgerRows = ledgerEntries
    .filter((entry) => belongsToDossier(entry, dossierId))
    .flatMap((entry) => entry.data);
  const sources = sourceEntries.map((entry) => entry.data);
  const dossiers = dossierEntries
    .filter((entry) => belongsToDossier(entry, dossierId))
    .map((entry) => entry.data);
  const gateResults = evaluateClaims(claims, ledgerRows);
  const resultByClaim = new Map(gateResults.map((result) => [result.claimId, result]));

  return {
    claims,
    ledgerRows,
    sources,
    dossiers,
    gateResults,
    resultByClaim,
    publishedClaims: claims.filter((claim) => resultByClaim.get(claim.id)?.publishable),
    corrections: correctionRows(ledgerRows),
    summary: verificationSummary(gateResults),
  };
}

export function resultForClaim(
  resultByClaim: Map<string, ClaimGateResult>,
  claimId: string,
): ClaimGateResult {
  return (
    resultByClaim.get(claimId) ?? {
      claimId,
      state: "blocked",
      publishable: false,
      issues: [
        {
          kind: "hard-failure",
          message: `Claim ${claimId} has no gate result.`,
        },
      ],
    }
  );
}
