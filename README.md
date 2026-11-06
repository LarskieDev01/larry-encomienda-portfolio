# Larry Encomienda — Career Portfolio Website

A recruiter-friendly interactive portfolio grounded in `Larry_Encomienda_CV.pdf` (updated November 2026). It presents more than 11 years of progressive experience across Data Engineering, Cloud Engineering, DevOps, Backend Development and AI-enabled analytics. The responsive site uses plain HTML, CSS and JavaScript, with **no installation or build step** needed.

## Quick preview

Open `index.html` directly in Chrome/Edge. For local HTTP testing, from this directory run:

```powershell
py -m http.server 8080
```

Visit `http://localhost:8080`.

## Publish online for $0 — Cloudflare Pages

1. Create or sign in to your free account at https://dash.cloudflare.com/.
2. Find **Workers & Pages**, create a Pages application, and connect the GitHub repository.
3. Select the `main` production branch, leave the build command empty, and use the repository root as the build output directory.
4. Use `larry-encomienda-portfolio` as the Cloudflare Pages project name.
5. Cloudflare generates a URL under `*.pages.dev` and automatically deploys future pushes to `main`.
6. Test Download CV, contact links, navigation, project dialogs, search and responsive layouts after publishing.

Documentation: https://developers.cloudflare.com/pages/get-started/git-integration/

### Alternative: GitHub Pages

Create a public repository, push the site files (including `index.html` in the root), then enable Pages under repository Settings → Pages and select the main branch/root. GitHub Pages will give you a URL under `github.io` (path depends on repository name). Docs: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## What is interactive?

- Dark/light mode (with browser preference saved locally)
- Career timeline accordions
- Skill category filtering
- Six interactive project detail dialogs
- Search / quick navigation (`Ctrl+K` or `Cmd+K`)
- Copy email, download CV, working mailto / LinkedIn links
- Mobile navigation, scrolling progress bar, accessibility / reduced motion support
- Animated changing hero headline

## How to edit

- Edit introductory copy, contact links and headings in `index.html`.
- Edit technology skills, career entries, and project summaries in `script.js` (top data arrays).
- Edit colors, layouts and typography in `styles.css` (CSS variables at top).
- Replace `assets/Larry_Encomienda_CV.pdf` with your latest resume (keep filename consistent or update references).

## Accuracy and privacy

All employers, employment dates and stack summaries follow the user's supplied CV. Project cards describe CV-supported work themes; they are not claims of open-source code, quantified results, publicly accessible project repositories, or original client deliverables. The portfolio intentionally does not display a fabricated GitHub username, testimonials, certifications or numerical performance improvements.

The published site exposes the email address present in the uploaded CV, since recruiters need contact details. You can remove it from public HTML if desired. No analytics tracking or cookies are included; the only browser storage used is the local theme preference. Google Fonts is loaded remotely and can be replaced with local/system fonts if required.

## Project tree

```
index.html
styles.css
script.js
assets/
  favicon.svg
  Larry_Encomienda_CV.pdf
README.md
```
