# Deploy / GitHub implementation

**Target:** `https://github.com/mycustomid/bluelinecapitale`.

This ZIP is a **full replacement public website**, not a tiny patch for the existing React entrypoint. Keep a backup branch or release of the old repo. Replace the root files with the contents of this archive. Remove obsolete `src/`, old `public/`, old `index.html`, `package-lock.json`, `vite.config.js`, and old `node_modules/` from the previous scaffold so they do not conflict.

```bash
# From an existing clone:
git checkout -b redesign/blue-line-editorial-2026
# Copy the ZIP contents into the repo root after deleting outdated scaffold files.
npm run test
npm run build
npm run dev
# verify all URLs and media manually in a browser
git add -A
git commit -m "feat: full bilingual institutional redesign"
git push -u origin redesign/blue-line-editorial-2026
```

You can deploy `dist/` to any static HTTP server with directory-index serving. `vercel.json` and `netlify.toml` are included. Redirects from `/companies/...` are provided as real HTML folders, reducing reliance on platform-specific rewrite rules.

No API key, server-side login, database, paid services or npm install is required. The contact form uses `mailto:`. Confirm recipient before launch or replace with an approved backend form handler.

Suggested go-live checks: verify contact inbox, mobile nav, filter buttons, footer, all 9 sectors in both languages, all SEO metadata, 404 behavior, redirects, external image availability, font appearance, keyboard focus, web accessibility, and real Lighthouse/PageSpeed scores (not assumed).
