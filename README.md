# Blue Line Capital Group — Institutional Website Redesign (2026)

**Delivery format:** complete public-facing static website, not a one-page concept or screenshot. Repository target: `https://github.com/mycustomid/bluelinecapitale`.

**Important:** This is a replacement public website, not the Blue Line internal platform, CMS, dashboard, CRM or login system. Backend products and regulated business services are **not** represented as live features.

## Design

- Corporate editorial art direction: deep petrol navy (`#0b2030`), warm ivory (`#f4f1e9`) and muted brushed gold (`#c6a16d`).
- Brand logo from the provided repository, no fabricated logo.
- Distinct page headings, substantive per-sector copy, natural photography references and owned local editorial imagery.
- Nine sector **areas** (not nine independently verified legal entities).
- Zero runtime dependencies; hand-authored CSS and lightweight vanilla JavaScript.
- 2 complete languages: English and French, each with real, crawlable URLs.
- Contact form honestly opens the user's email client; without an API or email service this does **not** claim a server submission.

## Pages

| Route family | Description |
|---|---|
| `/` and `/en/` | English homepage |
| `/fr/` | French homepage |
| `/en/about/`, `/fr/about/` | Group overview and principles |
| `/en/businesses/`, `/fr/businesses/` | Sector directory with working filters |
| `/en/businesses/{slug}/`, `/fr/businesses/{slug}/` | 9 individual business and function profiles, each with capabilities, approach and FAQ |
| `/en/approach/`, `/fr/approach/` | Editorial business philosophy |
| `/en/careers/`, `/fr/careers/` | People/career introductions (no invented vacancies) |
| `/en/contact/`, `/fr/contact/` | Contact and mailto-based form with validation |
| `/en/privacy/`, `/fr/privacy/` | Technical privacy disclosure pending legal approval |
| `/companies/{legacy-slug}/` and `/platform/ai_copilot/` | Legacy route redirects |

The archive contains 43 HTML files (including bilingual pages, legacy redirects and 404), CSS, JS, local images, SEO sitemap and editorial documentation. 

## Installation & build

Node.js 18 or later is enough. No `npm install` needed.

```bash
npm run dev       # http://127.0.0.1:5173/
npm run test      # static internal-link, image and page checks
npm run build     # exports deployable dist/
npm run preview   # serves built dist/
```

Deploy `dist/` to static hosting. `vercel.json` and `netlify.toml` are provided. Make sure GitHub repository files are **replaced**, not added on top of conflicting old `src/`, `package-lock.json`, and Vite settings (see `docs/DEPLOY.md`).

## Quality boundaries

- **Static QA:** internal paths, image `alt`, all required routes, build commands checked.
- **Browser QA:** NOT completed in this environment, because browser navigation was blocked by the administrator. Perform visual regression checks on Chrome/Safari/Firefox and across 320/390/768/1024/1440px before publishing.
- **Live performance:** Lighthouse and field Core Web Vitals NOT measured or guaranteed.
- **Photography:** selected Unsplash links load in online browsers; custom locally bundled visual illustrations serve as fallbacks. Other office/technology photography is bundled locally. Primary external stock photographs are *not* all bundled. This is documented, not disguised.
- **Legal / contact / regulatory facts:** need client approval (see `docs/CONTENT_VERIFICATION.md`).

## Prior version and why this replacement differs

The earlier 34 KB draft depended almost entirely on remote photographs, carried minimal sector pages and was not build-verified. This edition includes real directory routes, longer sector content, local visual assets, source checks and a dependency-free build path. It is not described as a verified production release until visual QA and client factual approval are complete.
