import { getCollection } from "astro:content";
import { evaluateClaims, parityGapDetails, verificationSummary, type ClaimGateResult } from "./gate";
import { belongsToDossier } from "./content-scope";
import { correctionRows } from "./ledger";

export type AtlasLocale = "en" | "ur";

export async function loadDossierCatalog() {
  const dossierEntries = await getCollection("dossiers");
  return dossierEntries
    .map((entry) => entry.data)
    .sort((a, b) => String(a.id).localeCompare(String(b.id)));
}

export async function loadAtlas(dossierId = "ashab-al-kahf") {
  const [claimEntries, ledgerEntries, sourceEntries, dossierEntries, beatEntries] = await Promise.all([
    getCollection("claims"),
    getCollection("ledgers"),
    getCollection("sources"),
    getCollection("dossiers"),
    getCollection("beats"),
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
  const beats = beatEntries
    .filter((entry) => belongsToDossier(entry, dossierId))
    .flatMap((entry) => entry.data)
    .sort((a, b) => a.order - b.order);
  const gateResults = evaluateClaims(claims, ledgerRows);
  const resultByClaim = new Map(gateResults.map((result) => [result.claimId, result]));

  return {
    claims,
    ledgerRows,
    sources,
    dossiers,
    beats,
    gateResults,
    resultByClaim,
    publishedClaims: claims.filter((claim) => resultByClaim.get(claim.id)?.publishable),
    corrections: correctionRows(ledgerRows),
    parityGaps: parityGapDetails(claims),
    summary: verificationSummary(gateResults, claims),
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
