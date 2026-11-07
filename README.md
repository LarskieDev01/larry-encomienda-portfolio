# Larry Encomienda Portfolio V3 — visit counter + Cloudflare deployment

This version preserves the V2 career portfolio and certificate images, and adds an approximate public visitor count in the footer.

## Important: Static hosting alone does not store a shared counter
The `functions/api/visits.js` endpoint runs on Cloudflare Pages Functions and writes to Cloudflare D1. Without the D1 binding, the website works but the footer counter displays a dash (—). Do not make up a count.

## Deploy with GitHub-integrated Cloudflare Pages
1. Commit all files from this folder, including `functions/api/visits.js`, at repository root on the `main` branch.
2. In Cloudflare Pages, use Git integration for the repository. Build command: none; output directory: `.` for this static site. Verify that Pages Functions are discovered by Cloudflare. If an existing Direct Upload project cannot support this desired workflow, create a new Git-integrated Pages project instead.
3. In Cloudflare: Workers & Pages > D1, create a database named `larry-portfolio-analytics` (subject to your account limits/pricing).
4. In D1 database console, execute `schema-d1.sql`.
5. In Pages project > Settings > Bindings, add D1 database binding: variable name `DB`, pointing to that database. Configure for production (and preview if needed). Redeploy.
6. Visit `/api/visits` (GET) and confirm `{ "visits": 0, ... }` or higher. Open site in a new browser tab and confirm footer displays a nonzero approximate visit count.
7. Enable Cloudflare Web Analytics separately in Pages > Metrics > Enable under Web Analytics. It provides private dashboard metrics and is preferable for estimating unique visitors.

## Measurement and privacy
The public number is approximate *visits*, not verified unique people. The browser uses sessionStorage to avoid incrementing on every refresh within the same tab. New tabs may count again; blocked JS and network errors may be missed; bots can inflate the count. The counter stores only one aggregate integer; no names, contact information, IP addresses, persistent visitor IDs, or cookies. Cloudflare Web Analytics numbers may differ because the metrics are defined differently.

## Desired URL
To get `https://encomienda-larry-portfolio-cv.pages.dev/`, check whether Cloudflare supports changing the project subdomain for your existing project. If not, create a new Pages project with that available name and connect the same GitHub repository; keep the existing site operational until verified. Do not assume changing the project display name changes the pages.dev hostname. `?utm_source=chatgpt.com` is a link tracking parameter, not part of the hostname—just share the clean URL without it.

## Check before sharing
Test desktop/mobile, selected work modals, certificate downloads, theme controls, accessibility, CV download, and the counter. The website and code have not been deployed by this ZIP creation process.
