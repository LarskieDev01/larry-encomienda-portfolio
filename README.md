# Larry Encomienda Portfolio — Version 4

This package contains the updated portfolio website with the following improvements:

- Databricks Lakehouse Fundamentals is now the featured credential
- Timeline side rail corrected to show NOW at the top and 2015 at the bottom
- Professional headshot added to the hero section
- Enhanced futuristic background glow effects and motion styling
- Cleaner premium look while keeping the site simple, fast, and recruiter-friendly
- Existing Cloudflare visitor counter files retained

## Main files
- `index.html`
- `styles.css`
- `script.js`
- `visitor-counter.js`
- `functions/api/visits.js`
- `schema-d1.sql`

## Added assets
- `assets/profile/larry-headshot.webp`
- `assets/certificates/databricks-lakehouse-clear.webp`

## Deployment
Deploy to Cloudflare Pages as a static site with Pages Functions enabled.
If using D1 visitor tracking, bind the `DB` database in Cloudflare Pages settings.
