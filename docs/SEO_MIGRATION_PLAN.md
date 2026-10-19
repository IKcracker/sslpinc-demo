# SEO-safe migration / production implementation plan

**This is an independent proposal demo on a different domain. Nothing here is an audit of `sslpinc.com` or a verified redirect map. Do not make production redirects from these examples.**

## Pre-migration

1. Obtain permission and a read-only site crawl window; gather a complete crawl of all `.html`, `.php`, directory and current WordPress URLs, site sitemaps and any available server logs.
2. Export page-level Search Console performance (landing pages, queries, clicks, impressions, indexing) and GA4 organic landing pages. Inventory backlinks and top pages where possible.
3. Record the canonical URL, status code, title, description, headings, main content, internal links, structured data and images for each page. Mark page priority, indexability and final content decision.
4. The owner and agency approve a URL mapping sheet with columns `old_path,new_path,action,reason,approved_by`. Preserve any valuable legacy path unchanged where practical. Map each changed address to its single most relevant replacement—not to the homepage by default. Flag `410 Gone` only with explicit approval.
5. Publish an access-controlled staging site with `noindex` and block real enquiries. Keep the existing production site fully operational.

## Development

- Use reusable custom-coded React service, staff, resource and FAQ templates. In production provide a secure, authenticated content administration backend, draft/publish controls and asset upload.
- Preserve SEO-relevant text, titles and heading intent. Allow team-approved revised copy; never invent clinical services or evidence.
- Generate title/description, canonicals, sitemap, robots directives, image alt text, Open Graph and appropriate structured data from approved site content.
- If hosting on Vercel, implement exact-match 301 entries at the edge or in `vercel.json` (mind platform limits). If rules are numerous, use an edge redirect map / hosting layer with tests.
- Validate query strings, case conventions, trailing slash behavior, redirect status codes, no chains and no cycles.

## Launch gates

- Side-by-side crawl comparison and explicit owner approval.
- All legacy mapped paths return intended `301` and final `200`; 404 / 5xx review complete.
- Verify no canonical to staging, no `noindex` on production, production sitemap accessible and robots policy reviewed.
- Test structured data, metadata parity, internal navigation, images, a11y and Core Web Vitals.
- Verify Search Console and GA4 access, set up monitoring. DNS change only after signoff.

## Post-launch, 30 days minimum

- Check server 404s and redirect regressions daily initially, then weekly; review Search Console coverage and ranking/traffic trends. Fix relevant indexing and internal linking issues; deliver migration report.
- SEO traffic/rankings cannot be guaranteed, but checks and documented remediation are deliverables.

## Sample redirect mapping format

See `docs/redirects.example.csv`. It contains intentionally fictional routes and must NOT be activated against SSLP's live domain.
