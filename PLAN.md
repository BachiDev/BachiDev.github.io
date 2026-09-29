# Website Overhaul Plan — bachi.dev

> Goal: take the current small informational Next.js site from "functional dark template" to a coherent, polished, credible freelance-developer presence that converts visitors → portfolio views → contact inquiries.

Live: https://bachi.dev/ (custom domain on Squarespace; repo `BachiDev/BachiDev.github.io`, branch `main`) + portfolio fused at https://bachi.dev/work. Contact: fabian@bachi.dev (forwards to Gmail).

> **Decision (2026-09-29): custom domain + email.** `bachidev.github.io` now redirects to `bachi.dev` (automatic once the custom domain is set on the user site). Demo links in `projects.ts` intentionally still point at `*.github.io` project pages — those deployments are untouched.

Stack today: Next.js 15.3.5 + React 19 + TypeScript + Tailwind CSS v4 + tsparticles + Web3Forms. Deployed to GitHub Pages via `.github/workflows/nextjs.yml` (static export to `./out`).

---

## 1. Current-state audit (what's good / what's holding it back)

### What's already working — keep it

- Single-page structure is right for this size: Header → Hero → Services → About → TechStack → Contact → Footer.
- Static export + GitHub Pages workflow works; keep that deployment model.
- Dark theme fits a dev audience; purple accent (`purple-400` + blue→purple gradient buttons) is a good seed for a brand.
- Web3Forms contact (no backend to maintain) and `CookieConsent` show product thinking.
- `Container` abstraction gives consistent max-width/padding.

### Coherence & visual design issues (biggest lever)

1. **No design system:** colors are ad-hoc — `purple-400` headings, `blue-500→purple-600` buttons, solid `blue-500` FAB + cookie button, blue glow `rgba(59,130,246,0.5)` on card hover. Pick ONE palette and encode as tokens.
2. **Typography is all-mono:** `layout.tsx` loads only `Geist_Mono` and `globals.css` sets it as `body` font. Mono everywhere hurts readability and looks unfinished. Need a sans for body/headings + mono only for accents (tech pills, labels, code details).
3. **Weak visual hierarchy / rhythm:** `Services` and `TechStack` both use `bg-neutral-900` with an arbitrary `mb-12` on TechStack; `section-heading` is `text-5xl` purple everywhere while `About` hardcodes `text-3xl sm:text-5xl`. Spacing, heading sizes, and section intros are inconsistent.
4. **Generic iconography:** service icons are raw `/public/*.svg` files (`code.svg`, `smartphone.svg`, etc.) via `next/image`, inconsistent stroke/weight. `Header` logo reuses `android-chrome-192x192.png` (a favicon, low-res). Social icons (`github.svg`, `linkedin.svg`, etc.) exist in `public/` but are never used.
5. **Hero is thin:** full-viewport particles + name + "Full-Stack Developer" + one external "View My Portfolio" button. No value proposition, no location/availability, no secondary CTA (contact/CV), no socials, no scroll cue. High bounce risk.
6. **Particles clash + cost:** white particles/lines at `speed: 6`, `fpsLimit: 120`, `value: 80`, no `prefers-reduced-motion`, no mobile reduction. Heavy bundle (`tsparticles` full + `@tsparticles/react` + `slim`), `console.log` left in `particlesLoaded`, and white-on-dark fights the purple brand.

### Content & IA issues

7. **Services copy is generic:** 6 cards ("Web Development", "Mobile Development", "UI/UX Design", "Requirement Analyses", "Testing", "Database Management") could be any freelancer. No outcomes, no process, no pricing/engagement hint, no proof.
8. **About is anonymous:** one paragraph about "Telecommunications and AI Training" + photo + "Download CV". No stats (years, projects, clients), no timeline, no "how I work", no personality.
9. **TechStack is a pill wall:** 6 categories, ~30 pills, no proficiency signal, no icons, no context ("what I reach for in 2026"). `Testing: JUnit, Mockito` only feels stale next to a modern frontend list.
10. **Portfolio is external and disconnected:** two hard-coded links to `/my-portfolio/` (a separate site/repo?). No preview on this site — visitor must leave to see proof. Biggest conversion leak.
11. **Contact has no trust builders:** "Have a project in mind?" + bare form. No response-time promise, no email alternative, no location/timezone, no FAQ.
12. **Footer mixes concerns:** Austrian imprint (legally required: name, address, UID, court, WKO) sits next to copyright with no nav, no socials, no back-to-top, no sitemap/privacy links.

### Code health / tech debt

13. `src/app/page.tsx` is `'use client'` — forces the whole landing page client-side, killing Server Component benefits and SEO/streaming for zero reason (only `Header` + forms need client).
14. Flat `src/app/components/*.tsx` with barrel `index.ts`; content (services, tech, socials) hard-coded in JSX. No `src/data/`, no `src/lib/`, no types.
15. `Web3ContactForm.tsx` hard-codes the Web3Forms `access_key` next to the submit logic. Correction 2026-09-29: per the [Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq) the key is **public by design** (an alias for the contact email, not a secret) — so it belongs in `src/data/profile.ts`, safe to commit, with an optional env override. Still worth adding: honeypot + validation + proper states.
16. `FloatingActionButton` ("View Source Code") overlaps the cookie banner on small screens and adds little value for a client-facing site — footer link suffices. (Verified: the URL matches the `BachiDev/BachiDev.github.io` remote — not stale.)
17. `Header`: mobile menu has no `aria-expanded`/`aria-label`, no focus trap/Escape close, no active-section highlight; `Button` inside nav misuses `!w-auto !max-w-none` overrides — symptom of `Button` defaulting to `w-full max-w-xs mx-auto` (wrong default for a shared button).
18. `Button.tsx`: single gradient style, no variants/sizes, `Link` used for external URLs (should be `<a>` for external), no `disabled`/`loading` state for forms.
19. Images: `CV-Pic-Transparent.png` (550×550, `object-contain` + gradient fade hack), `Fabian_Bachmayer_CV.pdf` filename with underscores, no `priority`/`blur`, `fb-logo.svg` unused, `next.svg`/`vercel.svg` boilerplate left in `public/`.
20. `next.config.ts` is empty; static-export settings (`output: 'export'`, `images.unoptimized`) are injected magically by `configure-pages` in CI — fragile and undocumented. No `basePath` handling, no security headers (limited on Pages, but document it).
21. `package.json`: `lint` runs `next lint` (removed/deprecated in Next 15), no `typecheck`, `format`, or `test` scripts. `tsparticles` (full) is installed alongside `@tsparticles/slim` — redundant weight.
22. SEO/a11y gaps: `layout.tsx` metadata is just title+description. No Open Graph/Twitter cards, canonical, `robots.ts`/`sitemap.ts`, JSON-LD `Person`/`ProfessionalService`, `theme-color`, or per-section semantic headings. No skip-link, focus-visible styles, or reduced-motion handling. `neutral-400` body text on `#0a0a0a` is borderline contrast; floating form labels use a fragile `-z-10` hack.
23. `CookieConsent`: "Got it!" only — no Decline, no policy link, no granular choice; copy is generic. For an Austrian/EU imprint site this should be GDPR-clean (and currently the site sets no non-essential cookies anyway — consent banner may be unnecessary or should be tied to future analytics).

---

## 2. Vision & principles for the overhaul

**Positioning (one line):** _Fabian Bachmayer — Full-Stack Developer in Vienna building modern, maintainable web & mobile products, from requirements to production._

**Design principles:**

1. **One brand, everywhere:** single accent ramp (violet/fuchsia), single neutral scale, 2 fonts max.
2. **Proof over claims:** every claim links to a project, metric, or artifact (portfolio preview, GitHub, CV).
3. **Calm + fast:** restrained motion, `prefers-reduced-motion` respected, < 200 kB first-load JS target, Lighthouse 95+ on all axes.
4. **Server-first:** static, semantic HTML; client JS only where interactive (nav, form, subtle hero FX).
5. **Maintainable:** content in data files, sections as composable Server Components, typed props, linted/formatted/tested.

**Success metrics (define done):**

- Lighthouse: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100 (mobile + desktop).
- Contact conversion: add plausible event tracking (privacy-friendly) and measure portfolio-click + form-submit rates before/after.
- Zero `console.log`, zero hardcoded secrets, zero ESLint/TS errors, `npm run build` clean for `output: 'export'`.

---

## 3. Information architecture (proposed)

Keep one page (best for this size + GitHub Pages), but strengthen order and add proof:

```
1. Header (sticky, active-section highlight)
2. Hero (value prop + dual CTA + availability + socials)
3. Trust bar (stats: years / projects / clients + "based in Vienna, working worldwide")
4. Services (3–4 focused offers, not 6 generic)
5. Selected Work (NEW — preview 3–4 projects, link to /my-portfolio/ + GitHub)
6. About (bio + timeline + photo + CV)
7. Tech Stack (curated "I reach for" + proficiency, not pill wall)
8. Process / How I work (NEW — 4 steps: Discover → Build → Test → Ship & Support)
9. Testimonials (NEW — even 2 quotes beat zero; placeholder with outreach plan if none yet)
10. Contact (form + direct email + response promise + FAQ mini)
11. Footer (nav + socials + legal imprint block + back-to-top)
```

If testimonials/clients don't exist yet: ship the section skeleton hidden behind a feature flag / commented data array with a TODO + outreach checklist (Phase 4), don't fake quotes.

**Navigation:** Services · Work · About · Stack · Process · Contact + prominent "Portfolio" (external) + "Get in touch" CTA. Mobile menu with proper a11y.

### 3.1 Fusion: one repo, two routes (decided)

**Why fuse instead of keeping two repos:**

- **Style drift is guaranteed with two repos.** Today they already diverge: main site is dark-only + mono-only font with purple accents and particles; portfolio uses default light/dark theme + Geist Sans/Mono, gray cards, no shared components. "Same style" by copy-paste rots within weeks.
- **The CTA leaks.** Hero → external `/my-portfolio/` → tiny "Back to Overview" link. Fused internal routing (`/` ↔ `/work`) keeps context, is instant, and converts better.
- **Duplicated everything:** two `CookieConsent.tsx`, two `FloatingActionButton.tsx`, two `Footer.tsx`, two workflows, two dep trees to update (portfolio even has a broken `next.config.ts` — `output: 'export'` plus an ignored `module.exports` for images — and still runs `next lint`).
- **SEO split:** two thin sites instead of one stronger one; portfolio metadata is just `title: "Portfolio"`, no OG/JSON-LD.
- **Cost is low:** portfolio is 5 projects in a clean `projects.ts` data file + one `ProjectCard` — a day's migration, not a rewrite.

**Target (single repo `BachiDev/BachiDev.github.io`, static export, GitHub Pages user site):**

```
 /                  landing page (this overhaul)
 /work              portfolio index (migrated from my-portfolio, restyled)
 /work/[slug]       per-project case pages (Phase 2 stretch; static params)
 /my-portfolio/* → /work redirect (backwards compat, meta-refresh stub)
```

- `my-portfolio` repo: archive after migration; leave a README + redirect page pointing at `/work` so old links/bookmarks don't die.
- Live-demo links (crm-demo, hand-gesture-control, weather, Connect-4, webstore) stay as-is — they're separate deployments, unaffected.
- Unify on `main` branch convention (portfolio is on `master` — don't carry that over).

---

## 4. Design system (make it coherent)

### 4.1 Tokens (Tailwind v4 `@theme` in `globals.css`)

- **Colors:**
  - Background: `zinc-950` (`#09090b`) base, `zinc-900` raised surfaces. Drop `#0a0a0a` one-off.
  - Text: `zinc-100` headings / `zinc-400` body (check contrast ≥ 4.5:1; bump body to `zinc-300` where small).
  - Accent: violet primary (`violet-400`/`violet-500`) + fuchsia secondary for gradients only (`from-violet-500 to-fuchsia-500`). Remove blue-500 one-offs; migrate glow shadows to `violet-500/25`.
  - Borders: `white/10`; success/error states for form (emerald/red).
- **Typography:**
  - Display/body: `Inter` or `Geist Sans` (variable, `latin` subset). Headings tight tracking (`-0.02em`), body `leading-relaxed`.
  - Mono accent only: `Geist_Mono` or `JetBrains Mono` for eyebrow labels, tech pills, stats, `SectionHeading` kicker.
- **Shape & elevation:** `rounded-xl` cards, `rounded-full` pills/buttons; single card style: `border-white/10 bg-white/[0.02]` + hover `border-violet-500/40 + shadow violet`.
- **Spacing rhythm:** sections `py-20 md:py-28`, container `max-w-6xl`, section intro pattern: kicker (mono, uppercase, violet) → H2 (`text-3xl md:text-4xl`) → lede (`text-lg text-zinc-400 max-w-2xl`).

### 4.2 Shared primitives to build (replace ad-hoc)

- `Section` (`id`, `eyebrow`, `title`, `lede`, `children`, `tone: 'base'|'raised'`) — kills per-section heading drift.
- `Button` v2 — variants `primary | secondary | ghost`, sizes `sm | md | lg`, `loading/disabled`, renders `<a>` for external, `<Link>` for internal.
- `Card`, `Pill/Badge`, `SocialLinks` (use `lucide-react` `Github/Linkedin/Mail` — delete unused `public/*.svg` socials or replace with Lucide consistently).
- `Reveal` (IntersectionObserver fade-up, disabled with `prefers-reduced-motion`) — replaces non-existent `animate-fade-in-up` class referenced in `Hero.tsx:17` but never defined.
- Section dividers: subtle `bg-grid-pattern` or gradient hairline, not full-bleed color flips every section.

### 4.3 Motion & background

- Keep particles **only if** tamed: purple-tinted, ~40 particles on desktop / ~20 on mobile, `fpsLimit: 60`, `speed ≤ 1.5`, `repulse` on hover only (no click-push on touch), pause offscreen, full `prefers-reduced-motion` fallback to static gradient. Otherwise replace with CSS aurora/grid + noise (cheaper, more premium, zero JS).
- Remove `console.log` from `ParticlesBackground`; lazy-load the engine (`next/dynamic`, `ssr: false`) so it never blocks first paint.

---

## 5. Section-by-section plan

### 5.1 Header (`Header.tsx`)

- Sticky with scroll-state (add border/backdrop only after scroll), active-section spy (`IntersectionObserver`), `aria-expanded` + `aria-label` + Escape-to-close + focus styles on mobile menu.
- Logo: replace favicon-PNG with inline SVG monogram (`fb-logo.svg` exists — audit it; else draw `FB` mark) + wordmark.
- Right side: `Portfolio` ghost + `Get in touch` primary (currently only Portfolio). Keep external links with `target="_blank" rel="noreferrer"` + external icon.
- Add skip-link in `layout.tsx` (`"Skip to content"`).

### 5.2 Hero (`Hero.tsx`)

- Eyebrow: `● Available for projects — Vienna / Remote` (mono, emerald dot; make availability a data flag so it can be toggled).
- H1: keep name, add differentiated subhead: "Full-Stack Developer building fast, maintainable web & mobile apps."
- Dual CTA: `View selected work` (→ `#work`) primary + `Get in touch` (→ `#contact`) secondary; tertiary text-link `Download CV ↓`.
- Socials row (GitHub/LinkedIn/Email) using shared `SocialLinks`.
- Scroll cue + hero stats mini-row (years / projects shipped / stack). Ensure `h-[100vh]` → `min-h-[92svh]` (mobile browser chrome fix) and content works with JS disabled (particles decorative only).

### 5.3 Trust bar (new, tiny)

- One-line strip under hero: `5+ yrs experience · 20+ projects · Vienna, AT (CET) · EN/DE` — replace with real numbers; source from `src/data/profile.ts` single source of truth.

### 5.4 Services (`Services.tsx` + `ServiceCard.tsx`)

- Cut 6 → 4 focused offers aligned to freelance demand:
  1. Web Development (Next.js/React/TypeScript)
  2. Mobile Development (Flutter)
  3. API & Data (Node/Spring/Postgres/Supabase/Firebase)
  4. Quality & Delivery (testing, CI/CD, requirements → launch)
- Fold "UI/UX Design" into each card as "clean, accessible UI" unless design is truly a standalone offer; drop or merge "Requirement Analyses"/"Database Management" as process steps, not top-level services.
- Each card: Lucide icon, outcome line ("What you get"), 3-bullet scope, "typical engagement" hint. Uniform height, shared `Card`.
- Icons: add `lucide-react`, delete `code.svg/smartphone.svg/pentool.svg/file.svg/window.svg/globe.svg` after migration.

### 5.5 Selected Work (NEW — highest ROI)

- `src/data/projects.ts`: migrate from `my-portfolio/src/app/projects.ts` (5 projects: CRM Demo, Hand Gesture Control, Firebase Webstore, Weather Dashboard, Connect 4). Enrich each entry: `slug`, 1-line outcome/metric, `featured` flag (landing shows 3 featured, `/work` shows all).
- Card: rebuild on shared `Card` + new section styling (dark, violet accent, sans type) — do NOT carry over the gray light/dark card. Keep the good ideas: stack icons with tooltips (migrate `public/*.svg` icon set), image-enlarge lightbox (rebuild accessible: `<dialog>`, Escape close, focus return), Source + Live Demo buttons (migrate to `Button` v2 variants).
- Landing `#work` = teaser (3 featured cards) + `See all work →` internal link to `/work`. No more external CTA.
- Images: migrate `connect4.png/crm-demo.png/handGestureControl.png/webstore.png/weather.png` to `public/work/`, convert to `.webp`, explicit aspect ratios (kills current `fill + contain` CLS risk).

### 5.6 About (`About.tsx`)

- Rewrite bio: 2 short paragraphs (who + how I work) instead of one dense block. Add fact list: location, languages (EN/DE), background (Telecom, AI training), availability.
- Add timeline (e.g., Telecom → Software dev → Freelance) — 3–4 entries from CV; keep dates honest.
- Photo: keep `CV-Pic-Transparent.png` but optimize (convert to `.webp`, trim, proper `alt`, `sizes`, remove gradient-hack div or implement as mask). `Download CV` → secondary button with file size + "PDF, updated MMM YYYY"; rename file to `Fabian-Bachmayer-CV.pdf`.
- CV hygiene: ensure CV PDF is current and matches site claims.

### 5.7 Tech Stack (`TechStack.tsx`)

- Reframe as "What I reach for in 2026": 3 groups max (Frontend / Backend & Data / Ship & Collaborate) + "Also in toolbox" collapsed row. Cap ~6 pills per group.
- Optional proficiency dots or `● daily / ● often / ○ as needed` legend — honest, scannable. Add tiny Lucide/DevIcon glyphs later; pills-only is fine for v1 if styled consistently.
- Remove blue hover glow; use shared card + violet accent. Source from `src/data/tech.ts`.

### 5.8 Process (NEW — cheap, high trust)

- 4 steps: `01 Discover & Requirements → 02 Design & Build → 03 Test & Harden → 04 Deploy & Support`. One line each + deliverable. Reuses former "Requirement Analyses/Testing" content without dedicating service cards to it.

### 5.9 Testimonials (NEW, conditional)

- If 2+ real quotes exist: quote cards with name/role/company + avatar/initials. If not: omit section in v1, add outreach TODO (ask 3 past clients/collaborators for 2-sentence quote + permission). Never fabricate.

### 5.10 Contact (`Contact.tsx` + `Web3ContactForm.tsx`)

- Left column: pitch + `fabian@bachi.dev` mailto + location/timezone + "Replies within 48h" promise + socials. Right: form card.
- Form hardening: env-var access key (`NEXT_PUBLIC_WEB3FORMS_KEY`), client validation + `minlength`, honeypot field, `aria-describedby` errors, `loading/success/error` states, rate-limit note, success panel with "Send another" reset.
- Spam/privacy: link privacy note ("submitted via Web3Forms; never shared"), add `robots` honeypot; consider Cloudflare Turnstile later if spam appears.
- FAQ mini (3 items: availability, rates/engagement, remote/onsite) — cuts back-and-forth.

### 5.11 Footer (`Footer.tsx`)

- 3 columns: brand + blurb + socials | sitemap anchors | legal imprint (keep full Austrian block verbatim, add UID/court/WKO as today). Bottom row: `© year name` + `Back to top ↑` + `Privacy` anchor (add tiny privacy section or page) + "Built with Next.js & Tailwind".
- Keep imprint text accurate; don't move it to a subpage (single-page export keeps it simple).

### 5.12 FloatingActionButton + CookieConsent

- **FAB:** repurpose or remove. Options: (a) delete (recommended — source link belongs in footer), (b) convert to Back-to-Top appearing after scroll. Fix stale URL either way (`BachiDev/BachiDev.github.io` → current repo). Never overlap cookie banner.
- **CookieConsent:** audit first — site currently sets no tracking cookies. If no analytics/embeds: **remove banner**, add one-line privacy note in footer (cleaner + more premium). If adding privacy-friendly analytics (Plausible/Umami, cookieless): keep a minimal notice with Decline + Privacy link, store choice, never block content.

---

## 6. Technical plan

### 6.1 App structure (target)

```
src/
  app/
    layout.tsx          # metadata, fonts, JSON-LD, skip link
    page.tsx            # Server Component composing sections
    globals.css         # Tailwind v4 @theme tokens + utilities
    robots.ts sitemap.ts manifest.ts  # SEO/PWA
    components/
      layout/  (Header, Footer, Section, Container)
      sections/ (Hero, TrustBar, Services, Work, About, TechStack, Process, Testimonials, Contact)
      ui/      (Button, Card, Pill, SocialLinks, Reveal, SectionHeading)
      forms/   (ContactForm)
      fx/      (ParticlesBackground — dynamic, client-only)
  data/
    profile.ts projects.ts services.ts tech.ts testimonials.ts nav.ts
  lib/
    cn.ts  metadata.ts  analytics.ts (stub)
```

### 6.2 Key refactors (ordered)

1. **De-client `page.tsx`:** remove `'use client'`; make sections Server Components by default, add `'use client'` only to `Header`, `ContactForm`, `ParticlesBackground`, `Reveal`.
2. **Fonts:** `next/font/google` — `Inter` (or Geist Sans) for sans + `Geist_Mono` for mono accent; set `body { font-family: sans }`, use `font-mono` utility only for kickers/pills/stats.
3. **Tailwind v4 theme:** define brand tokens via `@theme` (`--color-brand-*`, `--font-sans`, `--font-mono`); replace hard-coded hexes and `!`-overrides; fix `section-heading` utility (currently purple-only, no eyebrow variant).
4. **Images:** `next.config.ts` → explicit `output: 'export'`, `images: { unoptimized: true }` (required for Pages static export), document why. Convert photo to `.webp`/AVIF, add `sizes`, `priority` on hero-adjacent image only.
5. **Env:** `.env.example` with `NEXT_PUBLIC_WEB3FORMS_KEY=`; update workflow to inject from GitHub Secrets; add `src/lib/env.ts` guard that disables form gracefully if missing.
6. **Deps:** add `lucide-react`; remove `tsparticles` full package (keep `@tsparticles/slim` only if particles stay, else remove all tsparticles); replace `next lint` with `eslint` flat config + `tsc --noEmit`.
7. **Scripts:** `dev / build / start / typecheck / lint / format / format:check` (Prettier). Remove `--turbopack` from default `dev` if it causes Pages build drift, or keep and note it.
8. **Cleanup `public/`:** delete `next.svg vercel.svg file.svg window.svg globe.svg code.svg smartphone.svg pentool.svg star.svg arrow-right.svg twitter.svg menu.svg` (after Lucide migration), keep `fb-logo.svg` (or replace), favicons, CV PDF (renamed), add `og-cover.png` + `work/*`.

### 6.3 SEO

- `layout.tsx` metadata: title template (`"%s · Fabian Bachmayer"`), description (150–160 chars, with "Vienna freelance full-stack developer"), `metadataBase: https://bachi.dev` (done), canonical `/`, Open Graph + Twitter cards with `/og-cover.png`, `authors`, `keywords` (light), `robots`.
- `robots.ts` + `sitemap.ts` (single URL now; extend when portfolio merges), `manifest.ts` + favicon set polish.
- JSON-LD: `Person` (name, jobTitle, address Vienna, url, sameAs GitHub/LinkedIn) + `ProfessionalService` (areaServed, priceRange "€€" or "on request" — pick one honest value).
- Semantic HTML: one `h1` (hero), `h2` per section, descriptive `alt`, link text never "click here".

### 6.4 Accessibility (acceptance: axe clean, keyboard-only pass)

- Skip link, visible `:focus-visible` rings (violet), sufficient contrast (body `zinc-300`+), form labels (keep floating or switch to top-aligned — top-aligned is safer), error announcements via `aria-live="polite"`, menu `aria-expanded`/`aria-controls`, decorative particles `aria-hidden`, `prefers-reduced-motion` disables Reveal + particles.

### 6.5 Performance budget

- Target: ≤ 200 kB total JS on first load, LCP < 2.5 s on Moto G4 / 4G, no layout shift (reserve image aspect ratios).
- Levers: dynamic-import particles, drop full `tsparticles`, subset fonts, `unoptimized` images with explicit dimensions, minimal client components, `loading="lazy"` below fold.

### 6.6 Quality gates

- ESLint (next + a11y plugin `eslint-plugin-jsx-a11y`), Prettier, `tsc --noEmit` in CI before `next build`.
- Add `pa11y`/axe smoke or at minimum Lighthouse CI on `out/` (Pages artifact) — even a manual checklist in PR template is a win for a solo site.
- PR preview: keep Pages deploy on `main`; add build-only check on PRs.

---

## 7. Content plan (voice & copy)

- **Voice:** direct, senior, friendly. Short sentences. Outcomes > buzzwords. EN primary (DE on request note).
- **Copy deck:** draft all section copy in `src/data/*.ts` (or a `COPY.md` during review) so text review doesn't require JSX edits.
- **Proof checklist:** every "I build X" must pair with a project link, metric, or CV entry. Remove unprovable adjectives ("best", "cutting-edge").
- **Legal:** keep imprint 1:1 accurate; add 5-line privacy note (what's collected: form data via Web3Forms; no tracking cookies unless analytics added; contact email for deletion requests).
- **Assets to produce:** 1 OG cover, 3–4 project covers, optimized portrait `.webp`, renamed CV PDF, favicon audit.

---

## 8. Phased roadmap (solo-friendly, each phase shippable)

### Phase 0 — Foundations (0.5 day, no visual change)

- [x] `next.config.ts`: explicit `output:'export'` + `images.unoptimized`; `tsparticles` full package removed (unused — only `slim` is imported).
- [x] Env: Web3Forms key lives in `src/data/profile.ts` (public by design per Web3Forms FAQ — no secret, no rotation needed) with optional `NEXT_PUBLIC_WEB3FORMS_KEY` override; form degrades to mailto fallback without a key; honeypot added.
- [x] Scripts: `typecheck` / `lint` (flat `eslint .`, dropped deprecated `next lint`) / `format` + Prettier; `lucide-react` installed for Phase 1 icons.
- [x] Removed `console.log` in particles; FAB URL verified correct (matches remote), overlap handled in Phase 2 redesign.

### Phase 1 — Design system + coherence (done 2026-09-29)

- [x] Tokens in `globals.css` (`@theme`: brand violet ramp, Inter + Geist Mono vars), body now sans on zinc-950; single `Section` intro pattern (mono kicker → H2 → lede); `Button` v2 (primary/secondary/ghost + sm/md/lg, external/download handling); `Card`/`Pill`/`SocialLinks`/`Reveal` primitives; `cn()` + `src/data/profile.ts` single source of truth.
- [x] Migrated Header/Hero/Services/About/TechStack/Contact/Footer to primitives; deleted `Container`, `ServiceCard`, `!`-overrides, per-file heading styles, undefined `animate-fade-in-up`. Also fixed invalid nested `<a><button>` on the CV download.
- [x] Lucide icons (services, menu/close, mail); removed 15 dead `public/*.svg`. Note: installed lucide-react ships no brand icons — GitHub mark stays as `github.svg` asset.
- [x] `page.tsx` → Server Component (only Header/Form/FX/Reveal are client); skip link + `:focus-visible` + reduced-motion/noscript fallbacks.
- [x] Definition of done: `typecheck` + `eslint .` + `next build` (static `out/`) all green; `out/index.html` verified server-rendered.

### Phase 2 — Proof sections + portfolio fusion (done 2026-09-29)

- [x] Migrated `my-portfolio`: `projects.ts` → `src/data/projects.ts` (+ slugs, honest outcome lines, `featured` flags); 5 screenshots → `public/work/*.webp` (sharp, max 1280w, q80 — incl. a ~2 MB .png tamed); 21 used tech icons → `public/tech/` (unused ones left behind).
- [x] New `/work` route (all 5 projects, restyled, own metadata) + landing `#work` teaser (3 featured + internal `See all work →`); all `/my-portfolio/` CTAs replaced (Header, Hero, Footer). Nav now Services · Work · About · Tech Stack · Process · Contact, working from both routes via absolute anchors.
- [x] `/my-portfolio` redirect shim (client `replace` + fallback UI) → `/work`. NOTE: the old `my-portfolio` repo still deploys a project page at that path, which shadows this shim — repo must be unpublished/redirected (see Phase 4).
- [x] `ProjectCard` rebuilt on `Card`/`Button` v2: uniform white icon tiles (fixes dark-on-dark icon invisibility), tooltips + `title`/`aria-label`, outcome line, accessible lightbox (`role=dialog`, Escape, focus restore, close button).
- [x] Selected Work + Process (4 steps) + Contact upgrade (info column, sending/success/error states, `aria-live`, FAQ `<details>`) + Footer (nav, socials, back-to-top). Section rhythm re-alternated (About raised, TechStack base).
- [x] Hero rewrite (eyebrow, dual CTA, socials) done in Phase 1. Trust bar + About timeline/photo/CV rename + particles tuning + Cookie/FAB decision still open → moved to Phase 3/4.

### Phase 3 — SEO / a11y / perf hardening (done 2026-09-29)

- [x] Full metadata (title template, description, keywords, `metadataBase: https://bachi.dev`) + OG/Twitter cards with generated `og-cover.png` (1200×630, `scripts/generate-og-cover.mjs`) + JSON-LD `Person` + `robots.ts`/`sitemap.ts`/`manifest.ts` (all `force-static` for export; verified in `out/`).
- [x] A11y: project-type kicker bumped to zinc-400 for contrast; form `aria-live`/`role=status`, accessible lightbox dialog, skip link, focus rings, reduced-motion + noscript fallbacks all in. Still to run in a real browser: axe + keyboard-only walkthrough.
- [x] Perf: particles tamed (violet tint, 60fps cap, speed 1.2, 25–50 count by viewport, no click-push on touch, static gradient for reduced-motion). Deliberately skipped `next/dynamic` for the FX — the component already renders null until the engine loads, and `ssr:false` would force a client boundary for little gain at 158 kB first load.
- [x] Privacy: cookie banner **removed** (site sets no cookies — banner was pure noise); footer now carries a one-line privacy note. FAB **removed** 2026-09-29 (floating "View Source Code" = template clutter for a recruiter audience); open-source signal preserved as a quiet "source on GitHub" footer line.
- [x] Still to run post-deploy: Lighthouse in Chrome on bachi.dev (target 95+/95+/95+/100), OG debugger (LinkedIn/GitHub preview), Search Console re-verification for the new domain.
  - Result 2026-09-29 (desktop): **100 / 96 / 100 / 100** — only miss was `color-contrast` on the new footer privacy line (zinc-500 on zinc-900, 3.67:1) → bumped to zinc-400. Remaining audit notes are non-actionable: unminified-JS = a Chrome extension, cache lifetimes = GitHub Pages headers (not controllable), legacy-JS = Next polyfills.
  - Follow-up from the report: portrait PNG was 1 MB (910 KB waste) → `CV-Pic.webp` (800w, 44 KB); card thumbnails split out as `-sm.webp` (640w, ~⅓ size), full-size kept for the lightbox. Rebuilt + verified in `out/`.
  - Result 2026-09-29 after fixes — desktop **100 / 100 / 100 / 100**; mobile **98 / 100 / 100 / 100**. The 2 mobile points are LCP 2.3s on the hero subhead paragraph (text LCP under simulated Moto G4 throttling; TTFB 52 ms + 150 ms render delay — i.e. throttled font rendering, nothing structural). No action taken; well above the 95+ targets.

### Phase 4 — Launch & iterate (ongoing)

- [ ] Merge to `main` → Pages deploy; verify live (all anchors, form end-to-end, 404-free, OG debugger).
- [ ] Add privacy-friendly analytics (Plausible/Umami, cookieless) + measure CTA/form rates for 2–4 weeks.
  - Dropped 2026-09-29 per owner: site is for recruiters, not marketing — no analytics, which also keeps the "no tracking" privacy note true.
- [ ] Testimonials outreach (3 asks); add section when 2 permissions land.
  - Dropped 2026-09-29 per owner: no stats bar (thin history), no testimonial quotes (doesn't want third-party quotes on the site).
- [x] Archive `BachiDev/my-portfolio` (README redirect note) after `/work` is live and `/my-portfolio/` links verified redirecting.
  - Done 2026-09-29 as a redirect shim instead of archiving: repo now serves only `page.tsx` → `window.location.replace("https://bachi.dev/work")` + fallback UI; all components, data, and 44 public assets deleted; README marked RETIRED. Bonus fix: its `next.config.ts` dual `module.exports`/`export default` pattern silently dropped `output: "export"` (local builds never exported) → rewritten clean. Verified `out/` contains only the redirect. Push `master` to deploy the shim.
  - Decision 2026-09-29: keep the shim repo alive, do NOT delete or archive it — old CVs in the wild link to `/my-portfolio/`, and only a live repo keeps those links working (archiving risks freezing/invalidating the Pages deployment).
  - Verified live 2026-09-29: `bachidev.github.io/my-portfolio/` serves the shim ("This portfolio has moved → bachi.dev/work"); OG/Twitter tags confirmed in served `bachi.dev` HTML with absolute `og-cover.png` URLs.
- [ ] Consider per-project `/work/[slug]` case-study pages (problem → approach → outcome, static params) — Phase 4 stretch, not part of initial fusion.
- [x] Content round 2026-09-29: services cut 6 → 4 (Web / Mobile / API & Data / Quality & Delivery, each with outcome line + 3 scope bullets, 2-col grid, new "What I can do for you" heading).
  - CV regenerated 2026-09-29 (`scripts/generate-cv.py`, ReportLab, Jake-style): per-bullet tech stacks, civil service dropped, languages folded into skills, tightened spacing → clean 1-pager `public/Fabian-Bachmayer-CV.pdf`; site Download button repointed, old PDFs deleted.
  - About bio upgraded 2026-09-29: wall-of-text → 2 short paragraphs + icon fact rows (location, languages, email) + CV button with "PDF · 1 page" + availability badge; new full-width "My path so far" timeline (`src/data/timeline.ts`, 2016 → now, current entry highlighted).
- [ ] Quarterly: refresh availability flag, project list, CV PDF date, copyright year (already dynamic).

**Estimated total:** 3–5 focused days solo. Phase 1 alone delivers ~70% of the perceived "level up".

---

## 9. Risks & decisions needed

| #   | Decision                                                  | Recommendation                                                                                                       | Owner |
| --- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----- |
| 1   | Particles: keep or drop?                                  | Keep only if tamed (purple, ≤60fps, reduced-motion off); else CSS aurora                                             | You   |
| 2   | Portfolio: teaser here + external archive, or full merge? | ~~Teaser now; full merge as follow-up~~ → **DECIDED 2026-09-29: full fuse into `/work` in this overhaul** (see §3.1) | You   |
| 3   | Analytics: none vs Plausible/Umami?                       | Ship v1 with none; add cookieless later (then revisit cookie notice)                                                 | You   |
| 4   | Testimonials without quotes?                              | Omit section until 2 real permissions; track outreach                                                                | You   |
| 5   | Rates on site?                                            | "On request / fixed-scope after discovery call" + response-time promise (safe, professional)                         | You   |
| 6   | DE version?                                               | EN now; note "DE on request"; full i18n only if leads demand it                                                      | You   |
| 7   | Contact email public?                                     | Yes (already in imprint) + form; add obfuscation-free mailto (imprint requires it anyway)                            | You   |

---

## 10. Acceptance criteria (ship gate)

- [ ] One palette, two fonts, one section pattern across all sections (visual review on mobile + desktop).
- [ ] Hero states value prop + availability + 2 CTAs + socials; no dead-end.
- [ ] Selected Work shows ≥3 projects with stack + outcome + links; Portfolio CTA tracked.
- [ ] Form: validation, loading/success/error, honeypot, env key, `aria-live` feedback; test submission received.
- [ ] SEO: OG card renders, sitemap/robots live, JSON-LD valid, single H1, descriptive alts.
- [ ] A11y: keyboard-only flow works, focus visible, contrast pass, reduced-motion respected, axe clean.
- [ ] Perf: Lighthouse ≥95/95/95/100, no CLS, particles never block paint.
- [ ] Legal: imprint accurate, privacy note present, cookie banner only if tracking exists.
- [ ] Repo: no secrets in git, no dead assets, `typecheck+lint+build` green, README updated (how to run, env, deploy).

---

## 11. Immediate next actions (if you say "go")

1. Phase 0 foundations PR (config + env + scripts + FAB/log fixes).
2. Phase 1 design-system PR (`Section/Button/Card` + fonts/tokens + Lucide + Server Components).
3. Draft copy deck for Hero/Services/Work/About in `src/data/` for your review before styling polish.
4. Phase 2 + 3, then launch + analytics.

_Suggested commit flow: one PR per phase above; each deployable to Pages independently._

---

### Appendix — files to touch (quick index)

- Keep & refactor: `src/app/page.tsx`, `layout.tsx`, `globals.css`, `components/{Header,Hero,Services,ServiceCard,About,TechStack,Contact,Web3ContactForm,Footer}.tsx`, `next.config.ts`, `package.json`, `.github/workflows/nextjs.yml`, `public/` (prune + add OG/work covers).
- Rework or remove: `ParticlesBackground.tsx` (tame/lazy or replace), `FloatingActionButton.tsx` (delete or → back-to-top), `CookieConsent.tsx` (remove if no tracking), `Container.tsx` (merge into `Section`), `Button.tsx` (variants).
- Add: `src/data/*`, `src/app/{robots,sitemap,manifest}.ts`, `src/app/work/page.tsx` (+ later `work/[slug]/page.tsx`), `components/{ui,layout,sections}`, `.env.example`, `og-cover.png`, `public/work/*` (migrated screenshots + tech icons), PR template with Lighthouse/a11y checklist.
- Migrate in from `my-portfolio` (then archive it): `src/app/projects.ts` → `src/data/projects.ts`, `ProjectCard.tsx` (rebuild on primitives), 5× `public/*.png` screenshots, tech-icon `public/*.svg` set (prune unused), project live/GitHub URLs.
- Do NOT carry over: portfolio's `globals.css` (light/dark default), `layout.tsx` fonts-as-body setup is fine but body font must become sans per §4.1, broken `next.config.ts` dual-export pattern, duplicated `CookieConsent`/`FloatingActionButton`, `master` branch convention.
