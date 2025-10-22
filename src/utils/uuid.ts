// Utility to extract a trailing UUID from a URL/string.
// Matches UUID v1–v5 at the end of the string, allowing an optional trailing slash
// and optional query string (e.g., .../uuid, .../uuid/, .../uuid?x=1).

const UUID_TRAILING_RE = /(?:^|\/)\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})\b(?:\/)??(?:\?.*)?$/;

export function extractUuid(url: string): string | null {
  if (!url) return null;
  const match = UUID_TRAILING_RE.exec(url.trim());
  return match ? match[1] : null;
}

export function extractUuids(urls: string[]): string[] {
  return (urls || [])
    .map((u) => extractUuid(u))
    .filter((v): v is string => Boolean(v));
}

export const UUID_TRAILING_REGEX = UUID_TRAILING_RE;

