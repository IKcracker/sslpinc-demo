# SSLP — Independent website redesign concept

A custom-coded React + Vite prototype for a pediatric speech-language pathology website redesign. **Not affiliated with the practice.** All staff, copy, resources and contact flow are illustrative. This repository is for a proposal demonstration; it is not the client's live website.

Live preview: https://sslpinc-demo.vercel.app

## Run

```bash
npm ci
npm run dev
npm run build
npm run check:routes
npm run preview
```

Vercel: framework `Vite`, build command `npm run build`, output `dist`.

## Pages

Home, About, Team, Services, Evaluations, Parent Resources, Professional Referrals, Careers, Request Information, Content Studio, Migration Plan and Accessibility Approach. Dedicated service pages include Community Integration Services, JASPER Therapy and Myofunctional Therapy. Resource and service templates are reusable.

## Content updates

- `src/content.js` contains the **initial illustrative content** in one place.
- `/content-studio` is interactive: edit content, add/remove team, services, FAQs and articles, save changes to **this browser only**, preview on site, or export JSON.
- **Do not portray the local-only editor as production persistence.** A real custom authenticated CMS with database, draft/publish control, photo upload and role management must be delivered after client agreement. See `docs/CONTENT_ADMIN_SCOPE.md`.

## SEO and redirects

`npm run build` outputs **pre-rendered HTML** for known pages with distinct metadata, canonical URLs, WebPage schema, static routes and a generated sitemap. Every demo page is intentionally `noindex,nofollow` with `robots.txt` disallowing crawlers because this domain is **not** authorized as the clinic's official website.

Before production release, generate the actual redirect map by crawling the official existing site with permission, verifying Search Console and GA4, preserving old URLs, and submitting the approved map for review. Do not redirect all old paths to the homepage. No real legacy redirects have been activated. See `docs/SEO_MIGRATION_PLAN.md`.

To publish an approved production site: remove the demo-only noindex controls in `index.html`, `vercel.json`, and `scripts/prerender.mjs`; update `SITE_URL`, generate verified page metadata, revise robots and sitemap, implement approved page-to-page 301 redirects and test them all. **Do not do this for the demo.**

## Accessibility

Semantic landmarks, skip link, keyboard-operable menus, native accessible accordions, field labels, errors and focus states, reduced-motion support. Automated and manual WCAG 2.2 AA validation **has not yet been completed**. See `docs/ACCESSIBILITY_QA.md` for required checks and report template. No overlay/widget.

## Contact

The form demonstrates client-side validation, and deliberately does **not** save or transmit information. Production needs a secure backend, spam protection, approved privacy language and client-approved routing. Never use real patient information in this demo.
