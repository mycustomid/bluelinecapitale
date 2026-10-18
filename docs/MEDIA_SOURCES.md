# Media manifest and licensing

The design avoids counterfeit client photography. Local graphic assets under `site/assets/img/*-concept.webp`, `group-strategy.webp`, `exchange-market.webp`, etc., were **created procedurally for this project** by its build script `scripts/generate_art.py`. These are editorial artworks, not actual Blue Line property, staff, factories or projects.

`site/assets/img/blue-line-logo.png` was obtained from `mycustomid/bluelinecapitale` (user's branded repo). `site/assets/favicon.svg` was obtained from the same repo.

## Real editorial photography

The website references the following direct image URLs from the publicly accessible Unsplash photo CDN, with offline bundled illustrations as fallbacks for blocked or unavailable images:

- Foreign exchange: `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3`
- Property: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c`
- Construction: `https://images.unsplash.com/photo-1504307651254-35680f356dfd`
- Industrial manufacturing: `https://images.unsplash.com/photo-1565793298595-6a879b1d9492`
- Importation & trade: `https://images.unsplash.com/photo-1578575437130-527eed3abbec`
- Group finance: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40`
- People operations: `https://images.unsplash.com/photo-1521737711867-e3b97375f902`

Unsplash license: https://unsplash.com/license — permits commercial usage, copying and adaptation; does not allow building a competing image library. Direct CDN images are **not saved inside the ZIP**.

## Photography actually bundled in ZIP

- `office-workspace.webp`: sourced from the publicly shared StartBootstrap Creative repository, `dist/assets/img/bg-masthead.jpg`, https://github.com/StartBootstrap/startbootstrap-creative (template MIT, please check underlying photo rights if client requires explicit provenance). Used in Group pages.
- `technology-workspace.webp`: sourced from the publicly shared StartBootstrap Landing Page repository, `dist/assets/img/bg-showcase-2.jpg`, https://github.com/StartBootstrap/startbootstrap-landing-page (template MIT, review source photo rights). Used in Digital & AI pages.

Neither bundled stock photo should be described as the client's actual headquarters, team or technical premises.

## Before launch

Obtain client-provided brand films, permitted project photos, actual factory/real-estate imagery and official social accounts, then swap the image mappings in `scripts/build_pages.py` and rerun the page generator. For a *fully self-hosted photographic edition*, the seven remote Unsplash photos must be licensed/sourced, downloaded to `site/assets/img/` and paths updated. The current archive is designed to degrade gracefully but is not exclusively offline photography.
