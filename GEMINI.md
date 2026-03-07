# Trail des Crêtes - Project Context

## Project Overview

This is a modern web application for the "Trail des Crêtes" event. It is built using React, Vite, TypeScript, and Tailwind CSS. The UI is powered by `shadcn/ui` components and Radix UI primitives.

## Main Technologies

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **State Management & Data Fetching:** [TanStack Query (React Query) v5](https://tanstack.com/query/latest)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Building and Running

### Development

```bash
npm run dev
```

Starts the development server on `http://localhost:8080`.

### Build

```bash
npm run build
```

Builds the application for production to the `dist` directory.

### Testing

```bash
npm run test        # Run tests once
npm run test:watch  # Run tests in watch mode
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/components/`: Reusable UI components.
  - `src/components/ui/`: `shadcn/ui` primitive components.
- `src/hooks/`: Custom React hooks (e.g., `use-mobile.tsx`, `use-toast.ts`).
- `src/lib/`: Utility functions and configuration (e.g., `utils.ts`).
- `src/pages/`: Page-level components used in routing.
- `src/assets/`: Static assets like images and logos.
- `src/test/`: Test configuration and setup.
- `public/`: Public static assets (favicon, robots.txt).

## Development Conventions

### UI Components

- Use `shadcn/ui` components located in `src/components/ui/`.
- New UI components should follow the same pattern: functional components, standard Tailwind CSS for styling, and `class-variance-authority` (CVA) for variants if needed.
- Prefer `lucide-react` for icons.

### Styling

- Use Tailwind CSS utility classes directly in `className`.
- Custom global styles should be added to `src/index.css`.
- Use the `@` alias for imports (e.g., `import { Button } from "@/components/ui/button"`).

### Routing

- Routes are defined in `src/App.tsx`.
- Add new routes before the catch-all `*` (NotFound) route.

### Forms & Validation

- Use `react-hook-form` along with `@hookform/resolvers/zod` for form management and validation.

### Data Fetching

- Use `useQuery` and `useMutation` from `@tanstack/react-query`.
- The `QueryClient` is initialized in `src/App.tsx`.
