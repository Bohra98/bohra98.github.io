# Portfolio Redesign — Design Spec

Date: 2026-08-06

## Goal

Rebuild `bohra98.github.io` from a single static HTML file into a premium, animated, product-grade portfolio (Apple/Stripe/Linear/Vercel-tier) that convinces senior/staff-level recruiters at top AI/tech companies of strong engineering craft. All existing resume content (experience, projects, skills, achievements, certs, contact) is preserved — presentation and depth are elevated, nothing is removed.

## Current State

- Single `index.html` (~43KB), no build step, vanilla CSS + inline `<script>`.
- Already dark-themed with custom cursor, scroll-reveal via IntersectionObserver, glass-ish cards.
- Deployed by pushing directly to `main` on the `bohra98.github.io` user-site repo (GitHub Pages serves `main` root as-is).
- Content: hero, about/skills, 4-role experience timeline, 5 featured projects, 3 achievements, 3 certs, contact.

## Decisions

1. **Full rebuild on React/Vite**, not an incremental CSS/JS polish of the static file. Chosen over "keep it static, elevate with CDN scripts" because the user's ask (component architecture, Framer Motion, TS type safety) requires it, and it scales better for the case-study depth in Projects.
2. **Hero centerpiece: Three.js sphere** (`@react-three/fiber`) over a particle/node network or pure-CSS treatment — best fits an engineering (not "AI buzzword") brand, moderate complexity, graceful fallback for `prefers-reduced-motion`/no-WebGL.
3. **Projects stay single-page** with rich expandable case-study drawers (Framer `layoutId` shared-element transition) rather than dedicated routed detail pages — no React Router needed, no fake screenshots for closed-source client work, still achieves "product launch page" depth per project.
4. **Case-study narrative is expanded, not verbatim-only**: Challenge → Decision → Result framing is inferred from the existing resume bullets and known tech stack per project (e.g., MFE + Module Federation → the 40% deploy-time win becomes a mini case study). No new factual claims/numbers are invented beyond what's already in the resume content; only framing/prose is added. User reviews all copy before it ships.
5. **Deploy via GitHub Actions → gh-pages branch.** `main` holds the Vite/React source; a workflow builds on push and publishes `dist/` to a `gh-pages` branch (or Pages' native Actions deployment), with repo Pages settings pointed at that output. No manual build-and-commit step required going forward.

## Theme

Generated via Impeccable's palette seed (seed-059, hue 80°/amber-honey) instead of reusing the current site's neon cyan/violet/amber trio verbatim — the brief explicitly rejects "bright neon developer portfolio," so the palette moves from a 3-neon-color soup to one disciplined signature color plus a restrained secondary, in OKLCH:

- **Strategy: Committed.** One saturated primary carries the identity; pure black bg/surface keep it from turning warm-and-soft.
- `--bg`: `oklch(0.09 0.000 0)` — pure near-black, zero hue tint ("instrument-panel dark," not a warm near-black).
- `--surface`: `oklch(0.16 0.006 80)` — bg pulled toward ink, faint brand-hue tint, for cards/panels.
- `--ink`: `oklch(0.96 0.003 80)` — near-white body text, ≥7:1 against bg.
- `--muted`: `oklch(0.55 0.01 80)` — secondary text, ≥3.5:1 against bg.
- `--primary` (amber/honey signature): `oklch(0.78 0.15 80)` — CTAs, active nav state, hero glow, stat numbers. This replaces the old cyan as the dominant accent.
- `--accent` (violet, secondary): `oklch(0.62 0.18 290)` — used sparingly: hero sphere's second gradient stop, achievement/cert hover glow, drawer accents. Distinct in hue and lightness from primary (contrast ratio well above the 1.7 floor), so the two never blur into a single wash.
- All fills carry white/near-`--ink` text (both primary and accent sit in the saturated mid-luminance band).

This keeps a visual thread to the current site (amber and violet both existed in the old palette) while dropping cyan and disciplining which color appears where, so the hero's dual-tone glow (amber + violet) reads as considered lighting rather than a rainbow.

## Tooling

- **21st-dev CLI** (`21st`, authenticated as `bohrayuvraj`) — used during implementation to search/pull reference component code and motion patterns (`21st search`, `21st get`, `21st generate`) for the hero, cards, and drawer interactions, adapted to this project's palette/data layer rather than dropped in verbatim.
- **Impeccable** (project-installed, v4.0.4) — supplied the theme seed above; its `polish`/`audit` commands are used post-build for a production-quality pass (contrast, motion-reduction fallback, spacing rhythm) before calling sections done.

## Tech Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS
- Framer Motion (component/page animation, shared-element transitions, `whileInView` reveals)
- Lenis (smooth/momentum scrolling)
- GSAP + ScrollTrigger — used narrowly, only for the Experience timeline pin/progress-line effect that Framer doesn't cover well
- `@react-three/fiber` + `@react-three/drei` — hero sphere only, nowhere else in the app
- shadcn/ui primitives (dialog/drawer, tooltip) + Lucide icons
- ESLint + Prettier

## Architecture

```
src/
  components/
    layout/        Nav, Footer, CustomCursor, GrainOverlay, ScrollProgress
    hero/           HeroScene (r3f sphere), HeroContent, MagneticButton
    sections/       About, Experience, Projects, Achievements, Certs, Contact
    projects/       ProjectCard, ProjectDrawer, TechStackViz
    ui/             shadcn primitives
  data/             experience.ts, projects.ts, skills.ts, achievements.ts, certs.ts
  hooks/            useLenis, useMousePosition, useScrollProgress
  lib/              motion variants, utils
```

Content lives in typed `data/*.ts` files as the single source of truth — section components stay presentational/reusable, and future edits (new role, new project) are data changes, not design changes.

## Sections

**Chrome:** Fixed glass nav with a sliding active-section indicator and scroll-progress bar. Magnetic custom cursor (refined from current site). Fixed grain/noise overlay layer. Animated aurora gradient mesh background (CSS `@property`-animated gradients, GPU-cheap) behind all content.

**Hero:** Full-viewport. r3f distorted sphere/icosahedron with an aurora-toned gradient material, slow autorotation plus mouse-parallax tilt. Headline mask/clip-path reveal, typing-effect subtitle, animated stat counters (6+ yrs / 4 companies / 40% deploy time), magnetic CTA buttons. Falls back to a static gradient blur when `prefers-reduced-motion` is set or WebGL is unavailable.

**About:** Two-column layout; skills grid becomes hover-tilt cards with a cursor-tracking spotlight/border-glow. Text reveals on scroll via `whileInView`.

**Experience:** Vertical timeline; GSAP ScrollTrigger pins the timeline rail and draws its progress line on scroll. Each role card fades/slides in; metrics inside bullets count up when they enter view.

**Projects:** Grid of cards; each opens a full-screen `ProjectDrawer` via shared-element transition containing: header, Challenge → Decision → Result narrative, animated tech-stack pill cluster, a simple per-project SVG architecture diagram, and impact metrics as animated stat tiles.

**Achievements / Certs:** Same glass/spotlight-hover card language as About, staggered reveal.

**Contact:** Large gradient headline, magnetic contact pills, aurora glow backdrop. Email de-obfuscation handled client-side in React (the current Cloudflare email-protection snippet doesn't apply to a JS-rendered SPA).

## Performance

- Lazy-load the r3f canvas behind an `IntersectionObserver` gate / dynamic import.
- Animations use `transform`/`opacity` only, GPU-accelerated.
- Single-page app — no route-level code splitting needed beyond the lazy hero canvas.
- Target Lighthouse Performance/Accessibility/Best Practices/SEO all >95; verified before calling the work done.

## Deployment

`.github/workflows/deploy.yml`: on push to `main`, `npm ci && npm run build`, publish `dist/` to `gh-pages` (via `peaceiris/actions-gh-pages` or native GitHub Pages Actions deployment). Repository Pages settings updated to serve from that branch/Action instead of `main` root.

## Out of Scope

- Dedicated routed project detail pages (`/projects/:slug`) — deferred, not needed given the drawer approach.
- CMS or headless content source — `data/*.ts` files are sufficient for a single-owner portfolio.
- Blog/writing section — not part of current content, not added speculatively.
