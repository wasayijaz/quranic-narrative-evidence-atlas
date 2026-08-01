export type VerificationState = "yes" | "no" | "secondary";
export type Tradition = "sunni" | "shia" | "academic" | "shared";

export type ClaimAttribution = {
  source: string;
  edition: string;
  page?: number;
  volume?: number;
  part?: number;
  tradition?: Tradition;
};

export type ClaimForGate = {
  id: string;
  source_class?: string;
  status?: string;
  attributions: ClaimAttribution[];
};

export type LedgerRowForGate = {
  claim: string;
  source: string;
  edition: string;
  located: VerificationState;
  checked_by?: string;
  date_checked?: string;
  superseded_by?: string | null;
};

export type GateIssue = {
  kind: "hard-failure";
  message: string;
};

export type ClaimGateResult = {
  claimId: string;
  state: "verified" | "secondary" | "unlocated" | "blocked";
  publishable: boolean;
  issues: GateIssue[];
};

export type ParityGap = {
  claimId: string;
  missing: Array<"sunni" | "shia">;
};

type AttributionKey = `${string}::${string}`;

function attributionKey(claimId: string, sourceId: string): AttributionKey {
  return `${claimId}::${sourceId}`;
}

function activeRows(rows: LedgerRowForGate[]): LedgerRowForGate[] {
  return rows.filter((row) => !row.superseded_by);
}

export function evaluateClaimGate(
  claim: ClaimForGate,
  ledgerRows: LedgerRowForGate[],
): ClaimGateResult {
  const issues: GateIssue[] = [];
  const currentRows = activeRows(ledgerRows);
  const requiredSources = new Map<AttributionKey, string>();

  for (const attribution of claim.attributions ?? []) {
    requiredSources.set(attributionKey(claim.id, attribution.source), attribution.source);
  }

  if (requiredSources.size === 0) {
    issues.push({
      kind: "hard-failure",
      message: `Claim ${claim.id} has no attribution. Add a located source before it can publish.`,
    });
  }

  let hasUnlocated = false;
  let hasSecondary = false;

  for (const [key, sourceId] of requiredSources) {
    const row = currentRows.find((candidate) => attributionKey(candidate.claim, candidate.source) === key);

    if (!row) {
      issues.push({
        kind: "hard-failure",
        message: `Claim ${claim.id} cites ${sourceId}, but the ledger has no row for it. Add a row with located: no.`,
      });
      continue;
    }

    if (row.located === "yes") {
      if (!row.checked_by?.trim() || !row.date_checked?.trim()) {
        issues.push({
          kind: "hard-failure",
          message: `Claim ${claim.id} has located: yes for ${sourceId}, but checked_by and date_checked are required.`,
        });
      }
    } else if (row.located === "secondary") {
      hasSecondary = true;
    } else if (row.located === "no") {
      hasUnlocated = true;
    } else {
      issues.push({
        kind: "hard-failure",
        message: `Claim ${claim.id} has an unrecognised verification state for ${sourceId}; the gate is fail-closed.`,
      });
    }
  }

  if (issues.length > 0) {
    return { claimId: claim.id, state: "blocked", publishable: false, issues };
  }

  if (hasUnlocated) {
    return { claimId: claim.id, state: "unlocated", publishable: false, issues };
  }

  if (hasSecondary) {
    return { claimId: claim.id, state: "secondary", publishable: true, issues };
  }

  return { claimId: claim.id, state: "verified", publishable: true, issues };
}

export function evaluateClaims(
  claims: ClaimForGate[],
  ledgerRows: LedgerRowForGate[],
): ClaimGateResult[] {
  return claims.map((claim) => evaluateClaimGate(claim, ledgerRows));
}

export function parityGapDetails(claims: ClaimForGate[]): ParityGap[] {
  return claims.flatMap((claim) => {
    const traditions = new Set((claim.attributions ?? []).map((attribution) => attribution.tradition));
    const missing = (["sunni", "shia"] as const).filter((tradition) => !traditions.has(tradition));
    return missing.length > 0 ? [{ claimId: claim.id, missing }] : [];
  });
}

export function verificationSummary(results: ClaimGateResult[], claims: ClaimForGate[] = []) {
  const summary = results.reduce(
    (summary, result) => {
      summary.total += 1;
      summary[result.state] += 1;
      return summary;
    },
    {
      total: 0,
      verified: 0,
      secondary: 0,
      unlocated: 0,
      blocked: 0,
    },
  );

  return {
    ...summary,
    parityGaps: parityGapDetails(claims).length,
  };
}
