# bachi.dev — Fabian Bachmayer

Personal site and portfolio of Fabian Bachmayer, Full-Stack Developer in Vienna, Austria.

- Live: <https://bachi.dev>
- Selected work: <https://bachi.dev/work>
- Contact: [fabian@bachi.dev](mailto:fabian@bachi.dev)

Single-page landing (`/`) plus portfolio index (`/work`). Old `/my-portfolio/` URLs redirect to `/work`.

## Stack

- **Next.js 15** (static export) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with brand tokens in `src/app/globals.css`
- **tsparticles** hero background (tamed: 60 fps cap, reduced-motion fallback), **Web3Forms** contact form, **lucide-react** icons
- CV PDF generated from `scripts/generate-cv.py` (ReportLab), OG cover from `scripts/generate-og-cover.mjs` (sharp)

## Local development

```bash
npm install
npm run dev          # dev server (Turbopack)
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run build        # production static export to out/
npm run format       # prettier
```

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/nextjs.yml`) builds the static export and deploys to GitHub Pages. Custom domain `bachi.dev` is set via `public/CNAME` plus DNS records at Squarespace (apex `A`/`AAAA` to GitHub Pages IPs, `www` `CNAME` to `bachidev.github.io`).

## Repo layout

```
src/app/            # routes: / (landing), /work (portfolio), /de + /de/work (German), /my-portfolio (redirect shim)
src/app/components/ # sections + ui/ primitives (Section, Card, Pill, Button, Reveal, SocialLinks)
src/data/           # profile.ts (locale-independent constants), projects.ts (locale-neutral project base)
src/i18n/           # config.ts (locales + path helpers), en.ts / de.ts (copy), dictionaries.ts
src/lib/            # cn(), env
scripts/            # generate-cv.py, generate-cv-de.py, generate-og-cover.mjs, generate-og-cover-de.mjs
public/work/        # project screenshots (.webp + -sm thumbnails)
public/tech/        # stack icons
```

## Internationalization (EN + DE)

- `/` and `/work` are English (default, preserves existing SEO/backlinks); `/de` and `/de/work` are the full German mirror (Sie-Form).
- All user-visible copy lives in `src/i18n/en.ts` / `src/i18n/de.ts`, both satisfying the `Dictionary` type — a missing key in either language fails `typecheck`. Section components take a `locale` prop and read from `getDictionary(locale)`.
- Locale-neutral data (project slugs/images/URLs, email, availability flag) stays in `src/data/`; translated project/timeline copy is merged per locale via `getProjects(locale)`.
- Per-locale metadata (description, keywords, OG image, `hreflang` alternates, JSON-LD `Person`) is defined in each page; `sitemap.ts` lists all four URLs.
- Static-export note: only the root layout may render `<html>`, so `lang="en"` is set there and German pages correct it at runtime (`src/app/de/html-lang.tsx`). Crawlers rely on the `hreflang` alternates.
- German assets: `public/og-cover-de.png` (via `generate-og-cover-de.mjs`) and `public/Fabian-Bachmayer-CV-DE.pdf` (via `generate-cv-de.py`).

## Contact form

Submissions go through Web3Forms. The access key in `src/data/profile.ts` is **public by design** ([Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq)) — like an email address, not a secret. The form includes a honeypot field and a mailto fallback.

## History

`PLAN.md` documents the full overhaul (design system, portfolio fusion, domain move) including every decision and its rationale — kept in git on purpose as the project's decision log. The old standalone portfolio repo (`BachiDev/my-portfolio`) is intentionally kept alive as a redirect shim because old CVs link to it; see PLAN.md §3.1.
