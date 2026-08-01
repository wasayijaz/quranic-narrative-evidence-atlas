export type SourceForIntegrity = {
  id: string;
  edition?: { id?: string };
  access?: { kind?: string };
};

export type ClaimForIntegrity = {
  id: string;
  attributions?: Array<{
    source?: string;
    edition?: string;
    page?: number;
  }>;
  evaluation?: Array<{
    stated_in?: { source?: string; edition?: string; page?: number };
  }>;
};

export type LedgerForIntegrity = {
  claim?: string;
  source?: string;
  edition?: string;
};

function sourceEditionKey(source: string, edition: string): string {
  return `${source}::${edition}`;
}

export function findIntegrityErrors({
  sources,
  claims,
  ledgerRows,
}: {
  sources: SourceForIntegrity[];
  claims: ClaimForIntegrity[];
  ledgerRows: LedgerForIntegrity[];
}): string[] {
  const errors: string[] = [];
  const sourceIds = new Set(sources.map((source) => source.id));
  const editions = new Set(
    sources
      .filter((source) => source.edition?.id)
      .map((source) => sourceEditionKey(source.id, source.edition?.id as string)),
  );
  const claimIds = new Set(claims.map((claim) => claim.id));

  const checkCitation = (
    claimId: string,
    citation: { source?: string; edition?: string; page?: number },
    label: string,
  ) => {
    if (!citation.source || !sourceIds.has(citation.source)) {
      errors.push(
        `Claim ${claimId} ${label} cites ${citation.source ?? "an empty source id"}, but no source record exists.`,
      );
      return;
    }

    if (!citation.edition || !editions.has(sourceEditionKey(citation.source, citation.edition))) {
      errors.push(
        `Claim ${claimId} ${label} cites ${citation.source}, ${citation.edition ?? "an empty edition id"}, but that edition is not in the source registry.`,
      );
      return;
    }

    const source = sources.find((candidate) => candidate.id === citation.source);
    if (source?.access?.kind === "text-no-pagination") {
      errors.push(
        `Claim ${claimId} ${label} cites ${citation.source}, but its source has no pagination and cannot support a page-level citation.`,
      );
      return;
    }

    if (typeof citation.page !== "number") {
      errors.push(
        `Claim ${claimId} ${label} cites ${citation.source}, ${citation.edition}, but no page number is recorded.`,
      );
    }
  };

  for (const claim of claims) {
    for (const attribution of claim.attributions ?? []) {
      checkCitation(claim.id, attribution, "attribution");
    }

    for (const evaluation of claim.evaluation ?? []) {
      if (evaluation.stated_in) {
        checkCitation(claim.id, evaluation.stated_in, "evaluation");
      }
    }
  }

  for (const row of ledgerRows) {
    if (row.claim && !claimIds.has(row.claim)) {
      errors.push(`The ledger refers to claim ${row.claim}, but no claim file exists.`);
    }

    if (row.claim && row.source) {
      const claim = claims.find((candidate) => candidate.id === row.claim);
      const citesSource = claim?.attributions?.some((attribution) => attribution.source === row.source);
      if (claim && !citesSource) {
        errors.push(`Ledger row for claim ${row.claim} refers to ${row.source}, but the claim does not cite that source.`);
      }
    }
  }

  return errors;
}
