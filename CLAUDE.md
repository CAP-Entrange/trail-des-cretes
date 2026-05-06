# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build (outputs to ./dist)
npm run build:dev    # Development mode build
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Architecture

Static single-page marketing website for "Trail des Crêtes d'Entrange" (2026 trail running event), organised by club CAP Entrange. No backend or API calls — all content is centralised in `src/data/content.ts`.

**Stack**: React 18 + TypeScript + Vite (SWC) + Tailwind CSS + shadcn/ui (Radix UI) + Framer Motion + React Router v6

**Routing**: Single route (`/`) renders `Index.tsx` which composes all sections sequentially. `App.tsx` sets up the router and TanStack Query provider.

**Production base URL**: `/trail-des-cretes/` (set in `vite.config.ts` for GitHub Pages deployment). Deployment triggers automatically on version tags (`v*`) via GitHub Actions (`.github/workflows/deploy_site.yaml`).

## Content — single source of truth

**All editorial content lives in `src/data/content.ts`**. Never hardcode text or configuration in components.

| Export | What it contains |
|--------|-----------------|
| `club` | CAP Entrange club info: name, logo, sessions (day/time/distance), description, note |
| `event` | Event metadata: name, organizer, tagline, date, startTime, location, registrationUrl, contactEmail |
| `races` | Array of 4 races (marche 12 km + trail 12/22/32 km): distance, title, subtitle, elevation, startTime, price, description, funFact |
| `rules` | Array of 5 rules with icon, title, subtitle, text |
| `logistique` | Parking and changing rooms info |
| `restauration` | Pack inscription, consigne verre, menu items |
| `sponsors` | Array of sponsors with name, imgPath, url, bg colour |

## Page sections (in order)

`Index.tsx` renders these components sequentially:

1. `HeroSection` — hero banner with countdown and CTA
2. `AboutSection` — event description; "CAP Entrange" is a `ClubModal` trigger
3. `RacesSection` — race grid using `RaceCard` (expandable fun-fact per card)
4. `LogistiqueSection` — parking, vestiaires, restauration
5. `RulesSection` — règlement
6. `SponsorsSection` — sponsor logos
7. `CtaSection` — registration call-to-action
8. `Footer` — event name, location, "Organisé par CAP Entrange" (also a `ClubModal` trigger)

## ClubModal

`src/components/ClubModal.tsx` — Dialog (shadcn/ui) wrapping club info from `content.ts`. Triggered by clicking "CAP Entrange" in `AboutSection` and in `Footer`. All content comes from the `club` export; no hardcoded strings in the component.

## Key Conventions

**Imports**: Use `@/` alias for `./src/` (e.g., `@/components/ui/button`).

**UI primitives**: All shadcn/ui components live in `src/components/ui/`. Add new ones via `npx shadcn-ui@latest add <component>`. Do not hand-edit these files.

**Styling**: Tailwind CSS with CSS variables (HSL-based). Custom theme in `tailwind.config.ts` — fonts are Bebas Neue (`font-display`) and Source Serif 4 (`font-body`). Dark mode uses `class` strategy. Use `text-gradient-amber` utility class for section headings.

**TypeScript strictness**: `noImplicitAny` and `strictNullChecks` are disabled — the project uses a loose TS config intentional for rapid development.

**Tests**: Vitest + jsdom + React Testing Library. Tests live in `src/**/*.{test,spec}.{ts,tsx}`. Global test APIs (describe, it, expect) are available without imports.
