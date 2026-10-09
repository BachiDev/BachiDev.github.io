export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** "/" for EN, "/de" for DE. */
export function homePath(locale: Locale): string {
  return locale === "de" ? "/de" : "/";
}

/** "/work" for EN, "/de/work" for DE. */
export function workPath(locale: Locale): string {
  return locale === "de" ? "/de/work" : "/work";
}

/** Section anchor that works from any page of the given locale. */
export function anchorPath(locale: Locale, id: string): string {
  return locale === "de" ? `/de#${id}` : `/#${id}`;
}
