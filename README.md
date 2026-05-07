# Trail des Crêtes d'Entrange

Site web de présentation de l'événement **Trail des Crêtes d'Entrange 2026**, organisé par le club **CAP Entrange** (Moselle). Site statique one-page, déployé sur GitHub Pages.

## Stack technique

- **React 18** + **TypeScript** + **Vite** (bundler, SWC)
- **Tailwind CSS** + **shadcn/ui** (Radix UI) pour les composants
- **Framer Motion** pour les animations
- **React Router v6** (route unique `/`)
- **Vitest** + React Testing Library pour les tests

## Lancer le projet

```bash
npm install
npm run dev        # Serveur de dev sur http://localhost:8080
```

## Commandes disponibles

```bash
npm run dev          # Dev server (port 8080)
npm run build        # Build production → ./dist
npm run build:dev    # Build en mode développement
npm run preview      # Prévisualiser le build de prod en local
npm run lint         # ESLint
npm run test         # Tests (run once)
npm run test:watch   # Tests en mode watch
```

## Structure du projet

```
src/
├── assets/              # Images, logos, assets statiques
│   └── sponsors/        # Logos sponsors
├── components/
│   ├── ui/              # Composants shadcn/ui (ne pas éditer à la main)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── RacesSection.tsx
│   ├── RaceCard.tsx
│   ├── LogistiqueSection.tsx
│   ├── RulesSection.tsx
│   ├── SponsorsSection.tsx
│   ├── CtaSection.tsx
│   ├── ClubModal.tsx    # Modal "À propos de CAP Entrange"
│   ├── Countdown.tsx
│   ├── Footer.tsx
│   └── NavLink.tsx
├── data/
│   └── content.ts       # ⬅ Source unique de tous les contenus textuels
├── pages/
│   ├── Index.tsx        # Page principale (compose toutes les sections)
│   └── NotFound.tsx
└── hooks/
```

## Contenu centralisé

Tout le contenu éditorial est dans **`src/data/content.ts`** :

| Export | Description |
|--------|-------------|
| `club` | Infos CAP Entrange (nom, logo, séances, description) |
| `event` | Infos de l'événement (nom, date, lieu, inscription…) |
| `races` | Les 4 courses (marche 12 km, trail 12/22/32 km) |
| `rules` | Règlement de l'épreuve |
| `logistique` | Parking, vestiaires |
| `restauration` | Menu & tarifs restauration |
| `sponsors` | Liste des sponsors avec logos et URLs |

## Déploiement

Le déploiement se fait automatiquement sur **GitHub Pages** via GitHub Actions (`.github/workflows/deploy_site.yaml`) lors de la création d'un tag de version :

```bash
git tag v1.0.0
git push origin v1.0.0
```

URL de production : `https://cap-entrange.github.io/trail-des-cretes/` et `https://trail-des-cretes.fr`

> La base URL `/trail-des-cretes/` est configurée dans `vite.config.ts`.
