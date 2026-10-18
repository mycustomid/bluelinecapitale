# Verification report

The project has a static site generator (`scripts/build_pages.py`), a dependency-free build script, a static local server, and a route/asset integrity checker.

**Automated static test (2026-10-18):**

- 43 HTML files; 2 language variants; 9 unique sector detail pages per language.
- 1,554 internal local path references checked for existence.
- 199 image elements checked; zero missing `alt` attributes.
- `npm run test`: PASS.
- `npm run build`: PASS, export to `dist/`.
- HTTP HEAD `/en/`: returned status 200 from local Node server.

**Not verified:** Headless Chromium was explicitly blocked from navigating to any URL (including local `file://` and `127.0.0.1`) by environment administrator restrictions, so browser/visual screenshots and interactive UI checks could not complete. Lighthouse, CLS, LCP, INP, cross-browser behavior and mobile layout are not measured. The client must test them before signing off on production readiness.

**Known limitations:** the contact form uses the local mail client; some editorial photos are remote Unsplash CDN with local artistic fallback; any legal/regulatory and company contact fact requires owner verification.
