# Deployment

[Back to wiki index](README.md)

## How Deployment Works

The site is deployed automatically via **GitHub Actions** to **GitHub Pages**.

**Trigger:** Every push to the `main` branch (or manual trigger via `workflow_dispatch`).

**Pipeline** (`.github/workflows/deploy.yml`):

1. **Build job** (ubuntu-latest, Node 20):
   - `npm ci` — clean install dependencies
   - `npm run build` — build static site via Vite + SvelteKit adapter-static
   - Upload `build/` directory as a GitHub Pages artifact

2. **Deploy job** (runs after build succeeds):
   - Deploy the artifact to GitHub Pages via `actions/deploy-pages@v4`

**Concurrency:** The `pages` concurrency group with `cancel-in-progress: false` ensures deployments queue rather than cancel each other.

## Custom Domain

The site is served at **geolocally.com** via a `CNAME` file in `static/CNAME`.

DNS must be configured to point `geolocally.com` to GitHub Pages. This is managed through the domain registrar's DNS settings (A records for GitHub Pages IPs + CNAME for `www`).

## Build Output

The `build/` directory (gitignored) contains the fully static output:

```
build/
├── index.html          Home page
├── privacy.html        Privacy policy
├── terms.html          Terms of service
├── 404.html            Error/fallback page
├── robots.txt          Crawl directives
├── sitemap.xml         Page listing for search engines
├── favicon.svg         Site icon
├── CNAME               Custom domain config
└── _app/               JavaScript + CSS bundles
```

## SEO Static Assets

| File | Purpose |
|---|---|
| `static/robots.txt` | Allows all crawlers, points to sitemap |
| `static/sitemap.xml` | Lists 3 pages: home, privacy, terms |
| `static/favicon.svg` | SVG favicon |
| `static/CNAME` | GitHub Pages custom domain (`geolocally.com`) |

If you add a new page, update `sitemap.xml` with the new URL.

**Missing asset:** `static/og-image.png` — the OG meta tags reference `https://geolocally.com/og-image.png` but the file does not exist yet. Create a **1200x630px** image with the GeoLocally brand (purple/indigo + tagline) and save it to `static/og-image.png`. Until this file exists, social media link previews will have no image.

## Performance Optimization

**Baseline PageSpeed Insights (mobile, April 2026):** Performance 80, Accessibility 95, Best Practices 100, SEO 100.

| Metric | Value | Rating |
|---|---|---|
| First Contentful Paint | 2.6s | Orange |
| Largest Contentful Paint | 4.1s | Red |
| Total Blocking Time | 90ms | Green |
| Cumulative Layout Shift | 0 | Green |
| Speed Index | 4.2s | Orange |

### Optimizations applied

1. **Google Fonts async loading** — Uses `rel="preload"` + `media="print" onload="this.media='all'"` pattern in `app.html` to prevent the font stylesheet from blocking first paint. A `<noscript>` fallback ensures fonts load without JavaScript.

2. **GA4 script deferral** — The `gtag.js` library (~63 KiB) is loaded after the `window.load` event via a dynamically created `<script>` tag. The `gtag()` function and `dataLayer` are available immediately so events queue correctly — only the network fetch is deferred.

### Known remaining flags (not fixable)

- **Cache lifetimes (~80 KiB)** — GitHub Pages controls cache headers; not configurable.
- **Unused JavaScript (~63 KiB)** — Inherent to the gtag.js library; only a portion of the bundled code is used.
- **Forced reflow** — Caused by the hero CSS animations; minimal performance impact.

## Pre-Deploy Checklist

Before pushing to `main`:

- [ ] `npm run build` succeeds locally (catches broken imports, invalid JSON, Svelte errors)
- [ ] `npm run check` passes (catches type errors)
- [ ] If you changed pricing, verify all 5+ locations are consistent (see [Pricing & Packaging](pricing-and-packaging.md))
- [ ] If you added a page, update `static/sitemap.xml`
- [ ] Preview the build locally with `npm run preview`

## Manual Deployment

You can trigger a deploy without pushing code by using the **"Run workflow"** button in the GitHub Actions tab (the workflow supports `workflow_dispatch`).

*Last updated: 2026-04-08*
