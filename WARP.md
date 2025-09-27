# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview

- Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS + ESLint
- Purpose: A multi-design marketing site for Thrivemore Technology Advisors. The home page lists four design variants; each variant is a dedicated route.
- Key ideas:
  - App Router under src/app with a shared RootLayout (global CSS, theme provider, font).
  - Centralized, typed content under src/data and src/types, consumed by pages.
  - UI primitives under src/components/ui and shared components under src/components/shared.
  - Theming via next-themes with a ThemeProvider wrapping the app.
  - Path alias @/* pointing to src/* (see tsconfig.json).

Commands

- Install dependencies (uses npm; package-lock.json present)
  - Fresh install: npm ci
  - Regular install: npm install

- Run the dev server (Turbopack)
  - npm run dev
  - Opens http://localhost:3000; design routes are /design-a, /design-b, /design-c, /design-d

- Build and run production
  - Build: npm run build
  - Start: npm run start

- Lint
  - All: npm run lint
  - Single file (example): npx next lint --file src/app/page.tsx

- Type-check on demand
  - npx tsc --noEmit

Testing

- No test framework is currently configured in package.json (no test script, no Jest/Vitest config). Add one before relying on test commands.

Architecture and structure

- App composition (Next.js App Router)
  - src/app/layout.tsx sets up the Inter font, global styles (globals.css), and ThemeProvider (next-themes) for light/dark mode.
  - src/app/page.tsx is the home page that lists the four design routes and links to them.
  - src/app/design-*/page.tsx pages implement the design variants; they render with shared UI primitives and consume centralized data.

- Typed content model
  - src/types/index.ts defines domain types (TeamMember, CaseStudy, ValueModel, etc.).
  - src/data/content.ts provides the data consumed by pages (team members, case studies, value models, stats, clients).
  - This separation keeps pages presentational while content/data is managed centrally and typed.

- Components and utilities
  - src/components/ui: UI building blocks (e.g., button, card, switch), consistent styling with Tailwind.
  - src/components/shared: cross-page shared components (logo, theme-toggle) used by both the home page and design variants.
  - src/components/providers/theme-provider.tsx: wraps next-themes to provide theme context to the app.
  - src/lib/utils.ts: cn utility for composing Tailwind class names.

- Configuration
  - tsconfig.json: strict TypeScript settings; path alias @/* → ./src/*; Next plugin configured.
  - next.config.ts: minimal Next.js configuration scaffold.
  - Tailwind CSS v4 is included; styles live in src/app/globals.css.
  - ESLint is available via next lint (eslint-config-next in devDependencies). No standalone .eslintrc in the repo; Next’s config is used.

Docs and rules

- README.md highlights: install with npm install, start with npm run dev, and use .env.local for environment variables if needed. It also notes the stack (Next.js, TypeScript, Tailwind, ESLint) and suggests Vercel for deploys.
- No CLAUDE.md, Cursor rules, or Copilot instructions were found in the repository.
