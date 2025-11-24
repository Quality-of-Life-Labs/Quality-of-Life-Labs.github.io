# qoli-labs

Quality of Life Labs is a single-page-first Next.js experience for showcasing the team, projects that we've created, and qolimpact.com. The repository follows the
App Router convention where each top-level page (`/`, `/about`, `/experiments`)
is represented by its own folder containing `layout.tsx` and `page.tsx`.

## Code stack

- **Framework:** Next.js 16 (App Router) with React 19 and TypeScript.
- **Styling:** Tailwind CSS v4 via `globals.css`, plus utility classes for the
  glass cards and navigation.
- **Fonts:** `Plus_Jakarta_Sans` for body copy and `Space_Mono` for headings,
  loaded through `next/font`.
- **Components:** Persistent floating tab navigation (`src/components/nav-tabs`)
  shared through the root layout.
- **Tooling:** ESLint (Next.js core-web-vitals + TypeScript rules) with
  `npm run lint` gating CI-quality checks.

## Getting started

```bash
npm install
npm run dev
```

- Home: <http://localhost:3000>
- Experiments: <http://localhost:3000/experiments>
- About / Team: <http://localhost:3000/about>

## Linting

```bash
npm run lint
```

Runs ESLint with `--max-warnings=0` so the build fails on any warning.

## Development log

- **2025-11-24:** Bootstrapped the project with `create-next-app` (App Router,
  TypeScript, Tailwind, ESLint) and documented the npm scripts.
- **2025-11-24:** Replaced the starter hero with a custom full-screen layout,
  added three glass project cards, and introduced a persistent floating nav bar.
- **2025-11-24:** Created the `/experiments` route with its own layout/page pair
  and added placeholder experiment cards.
- **2025-11-24:** Swapped typography to Space Mono (headings) and Plus Jakarta
  Sans (body) via `next/font`.
- **2025-11-24:** Adjusted the visual system to an all-white canvas, ensured the
  home hero fits on a single screen, and converted the project showcase into a
  single CTA card linking to `qolimpact.com`.
- **2025-11-24:** Restyled navigation tabs (removed fill/shadow, subtle active
  state) and centered the hero text/CTAs.
- **2025-11-24:** Increased the vertical offset for `/about` and `/experiments`
  to sit lower beneath the floating nav.
- **2025-11-24:** Built the `/about` team grid with placeholder portrait blocks,
  added the full roster (Grayson + alphabetical list), and later simplified the
  cards to show only names and roles.
