// Single source of truth for locale-independent profile constants.
// Translatable copy (role, tagline, location, …) lives in src/i18n/{en,de}.ts.

export const profile = {
  name: "Fabian Bachmayer",
  email: "fabian@bachi.dev",
  // Toggle the availability badge in the hero.
  available: true,
  socials: [
    { label: "GitHub", href: "https://github.com/BachiDev" },
    { label: "Email", href: "mailto:fabian@bachi.dev" },
  ],
  // Public Web3Forms access key. Per https://docs.web3forms.com/getting-started/faq
  // this is a public identifier (like an email address), not a secret — safe to commit.
  // Spam protection comes from Web3Forms' filters plus the form honeypot.
  web3FormsKey: "13bb6870-31ec-4a08-a741-42c2d2bd80a3",
} as const;
