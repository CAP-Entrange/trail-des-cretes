import { mkdirSync, copyFileSync } from 'fs';

// GitHub Pages serves static files only — copy index.html into each
// client-side route directory so direct navigation works.
const routes = ['v2', 'v3'];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${route}/index.html`);
}
