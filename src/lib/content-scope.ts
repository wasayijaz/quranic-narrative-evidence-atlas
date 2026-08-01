export type ContentEntryRef = {
  id: string;
  filePath?: string;
};

function pathSegments(value: string): string[] {
  return value
    .replaceAll("\\", "/")
    .split("/")
    .filter(Boolean);
}

function hasDossierPath(value: string, dossierId: string): boolean {
  const segments = pathSegments(value);

  return segments.some(
    (segment, index) => segment === "dossiers" && segments[index + 1] === dossierId,
  ) || segments[0] === dossierId;
}

export function belongsToDossier(entry: ContentEntryRef, dossierId: string): boolean {
  return [entry.filePath, entry.id]
    .filter((value): value is string => Boolean(value))
    .some((value) => hasDossierPath(value, dossierId));
}
