# Nirjal Acharya — Portfolio

Dark, premium portfolio site built with React 19, Vite, TypeScript, Tailwind CSS,
Framer Motion, Lenis and a touch of Three.js.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build
```

## Editing your content — no component code required

Everything personal lives in `src/data/`. Edit these files only:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, role, tagline, bio, "About" highlight cards, resume link |
| `src/data/currentStatus.ts` | The "Currently" card on the hero (status items, availability) |
| `src/data/projects.ts` | Every project card — add a new object to the array to add a project, no limit |
| `src/data/skills.ts` | Skill categories/tags shown in the Tech Stack section and the scrolling marquee |
| `src/data/social.ts` | Email / GitHub / LinkedIn / Resume contact cards + navbar social icons |

## Replacing placeholder assets

Generated placeholders live in `public/`:

- `public/profile.jpg` → replace with your real headshot (square works best, it's cropped into a circle)
- `public/projects/*.jpg` → replace with real project screenshots (16:10 aspect ratio recommended)
- `public/resume.pdf` → replace with your actual resume

File names must stay the same, or update the `image` / `photo` / `resumeUrl` paths in the data files above.

## Notes on structure

- `src/components/ui/` — reusable primitives (Button, CursorGlow, GridBackground, Marquee, ParticleCore, SectionReveal animation helpers)
- `src/components/hero|about|projects|skills|contact|layout/` — one folder per section
- `src/hooks/` — `useLenis` (smooth scroll), `useActiveSection` (nav highlight), `useIsDesktop` (disables cursor glow / heavy effects on touch devices)
- The Three.js particle "core" behind the hero photo is lazy-loaded (`React.lazy`) so it's code-split out of the main bundle and doesn't affect first load.
- Respects `prefers-reduced-motion` (Lenis, particles, and CSS animations all back off).

## Deploying

This is a static site after `npm run build` — the `dist/` folder can be deployed as-is to
Vercel, Netlify, GitHub Pages, or any static host.
