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
src/app/            # routes: / (landing), /work (portfolio), /my-portfolio (redirect shim)
src/app/components/ # sections + ui/ primitives (Section, Card, Pill, Button, Reveal, SocialLinks)
src/data/           # profile.ts (single source of truth), projects.ts
src/lib/            # cn(), env
scripts/            # generate-cv.py, generate-og-cover.mjs
public/work/        # project screenshots (.webp + -sm thumbnails)
public/tech/        # stack icons
```

## Contact form

Submissions go through Web3Forms. The access key in `src/data/profile.ts` is **public by design** ([Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq)) — like an email address, not a secret. The form includes a honeypot field and a mailto fallback.

## History

`PLAN.md` documents the full overhaul (design system, portfolio fusion, domain move) including every decision and its rationale — kept in git on purpose as the project's decision log. The old standalone portfolio repo (`BachiDev/my-portfolio`) is intentionally kept alive as a redirect shim because old CVs link to it; see PLAN.md §3.1.
