export type LedgerRecord = {
  claim: string;
  source: string;
  edition: string;
  located: "yes" | "no" | "secondary";
  checked_by: string;
  date_checked: string;
  notes: string;
  superseded_by: string | null;
};

export function activeLedgerRows(rows: LedgerRecord[]): LedgerRecord[] {
  return rows.filter((row) => !row.superseded_by);
}

export function correctionRows(rows: LedgerRecord[]): LedgerRecord[] {
  return rows.filter((row) => Boolean(row.superseded_by));
}
