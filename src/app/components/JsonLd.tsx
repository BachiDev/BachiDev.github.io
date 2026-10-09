import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const siteUrl = "https://bachi.dev";

/** Localized schema.org Person — rendered once per page. */
export function PersonJsonLd({ locale }: { locale: Locale }) {
  const site = getDictionary(locale).site;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fabian Bachmayer",
    jobTitle: site.jobTitle,
    url: siteUrl,
    email: "mailto:fabian@bachi.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressCountry: "AT",
    },
    sameAs: ["https://github.com/BachiDev"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
