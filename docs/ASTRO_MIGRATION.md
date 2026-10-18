# Astro migration report

**Migrated:** 32 genuine Astro page components. Local images in `public/assets/img`: 16. Converted 86 remote Unsplash URLs to existing local editorial assets. Inspected 124 image elements.

## Architecture
- `src/pages/en`, `src/pages/fr`: individually editable Astro files for each corporate and sector page.
- `src/layouts/SiteLayout.astro`: shared SEO, canonical, hreflang, organization schema, header, footer and JS.
- `src/components/SiteHeader.astro`, `SiteFooter.astro`: reactive-free template components with contextual language nav.
- `public/assets`: site CSS, progressive vanilla JS and all editorial imagery from V2.
- `src/pages/companies/`, `src/pages/platform/`: legacy URL compatibility redirects.

## Build and verification
Run `npm install`, `npm run check:structure`, `npm run dev`, `npm run build`, `npm run preview`. Astro supports file based routing and static output. **Actual Astro build not validated in the sandbox because npm registry DNS was unavailable**, and Astro is not installed here. The architecture, file paths, i18n config, CSS, and static asset presence were checked locally. Do not represent it as an Astro-build-certified or browser-tested release.

## Media rights / content
No external Unsplash image fetch is needed: local editorial illustrative fallbacks are used as the main images. They are concept illustrations, NOT photographs of Blue Line's actual properties, projects, offices, employees, or facilities. See MEDIA_SOURCES.md and CONTENT_VERIFICATION.md. Original V2 docs refer to optional unsplash sources, which are no longer requested by V3 pages.

## Deployment
1. Replace repository contents with extracted project files. Do not retain Vite package settings or static-v2 scripts.
2. `npm install && npm run build` in a network-enabled Node.js >=20.3 environment. Deploy `dist`.
3. Do browser acceptance testing and have the company approve regulated/identity/financial facts and contact addresses.
