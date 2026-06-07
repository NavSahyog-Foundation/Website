export interface AccentSplit {
  before: string;
  word: string;
  after: string;
}

/**
 * Split a title around the first case-insensitive occurrence of `accentWord`,
 * so the matched word can be wrapped (e.g. in an italic accent span). Returns
 * null when there is no accent word or no match, in which case the caller should
 * render the title as-is.
 */
export function splitAccentWord(title: string, accentWord?: string): AccentSplit | null {
  if (!accentWord) return null;
  const idx = title.toLowerCase().indexOf(accentWord.toLowerCase());
  if (idx === -1) return null;
  return {
    before: title.slice(0, idx),
    word: title.slice(idx, idx + accentWord.length),
    after: title.slice(idx + accentWord.length),
  };
}
