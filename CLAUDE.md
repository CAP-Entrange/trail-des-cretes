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

Static single-page marketing website for "Trail des Crêtes d'Entrange" (2026 trail running event). No backend or API calls — all content is hardcoded in components.

**Stack**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui (Radix UI) + Framer Motion + React Router v6

**Routing**: Single route (`/`) renders `Index.tsx` which composes all sections sequentially. `App.tsx` sets up the router and TanStack Query provider.

**Production base URL**: `/trail-des-cretes/` (set in `vite.config.ts` for GitHub Pages deployment). Deployment triggers automatically on version tags (`v*`) via GitHub Actions.

## Key Conventions

**Imports**: Use `@/` alias for `./src/` (e.g., `@/components/ui/button`).

**UI primitives**: All shadcn/ui components live in `src/components/ui/`. Add new ones via `npx shadcn-ui@latest add <component>`. Do not hand-edit these files.

**Styling**: Tailwind CSS with CSS variables (HSL-based). Custom theme defined in `tailwind.config.ts` — colors include `concrete`, `olive`, `amber-glow`; fonts are Bebas Neue (display) and Source Serif 4 (body). Dark mode uses `class` strategy.

**TypeScript strictness**: `noImplicitAny` and `strictNullChecks` are disabled — the project uses a loose TS config intentional for rapid development.

**Tests**: Vitest + jsdom + React Testing Library. Tests live in `src/**/*.{test,spec}.{ts,tsx}`. Global test APIs (describe, it, expect) are available without imports.
