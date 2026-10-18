# Blue Line Capital Group — Astro Corporate Website V3

**Astro 5 / Static generation / EN + FR / 9 sector profiles**

This is the Astro source version of the V2 corporate redesign. Uses **Astro**, not React/Vite or the old dependency-free custom HTML generator. Source pages are `.astro`, all grouped by file-based routes. Shared Astro components provide navigation, footer, metadata, language switching and schema markup.

## Installation

```bash
npm install
npm run check:structure
npm run dev
npm run build
npm run preview
```

Node.js >=20.3.0. `npm run build` emits `dist/`. For deployment to Vercel or Netlify use the included configuration files. npm packages and `node_modules` are intentionally not in this ZIP. The npm registry could not be reached from the build sandbox, so Astro build **must** be run in a network-enabled environment before deploying.

## Pages

- `/` redirect to `/en/`
- `/en/`, `/fr/`: editorial home
- About, Businesses, Approach, Careers, Contact, Privacy in both languages
- 9 dedicated sector pages per language
- Legacy `/companies/` and `/platform/ai_copilot/` redirects
- 404 page

## Assets

The ZIP contains local WebP photos and illustrated concepts in `public/assets/img`, the original repo logo, CSS, JS and Open Graph image. Remote Unsplash URLs were replaced with editorial local fallbacks in this edition. All art must be considered editorial stock/concept, never evidence of group properties or employees. Full sourcing and verification checklist under `docs/`.

## Caution

Not a back-office/CRM/AI product. Contact form opens default mail app, without backend. Legal/regulated service claims and official contact details require client approval. **Astro build + browser visual QA not executed here** owing to npm/network constraints.
