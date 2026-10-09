import type { Dictionary } from "./en";
import type { Locale } from "./config";
import { de } from "./de";
import { en } from "./en";

export const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
