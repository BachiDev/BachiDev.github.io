"use client";

import { useEffect } from "react";

/**
 * Static export can only render one <html> tag (root layout, lang="en").
 * German pages mount this to correct the runtime lang for screen readers.
 * Crawlers are served via hreflang alternates in page metadata.
 */
export function HtmlLang() {
  useEffect(() => {
    document.documentElement.lang = "de";
    return () => {
      document.documentElement.lang = "en";
    };
  }, []);
  return null;
}
