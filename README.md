# Portfolio

Personal site built with [Astro](https://docs.astro.build), deployed to GitHub Pages.

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:4321.

## How content gets here

Each project's write-up lives in that project's own repo. `npm run sync` copies it into
`src/content/projects/<id>/` (post as `index.md`, optional `report.md`, and `figures/`).
Don't edit those folders by hand; edit the source and sync again.

To add a project, add an entry to the list in `scripts/sync-projects.mjs` (source folder,
file names, title, one-line summary, date, optional repo link), then run `npm run sync`.

| What | File |
|---|---|
| Name, email, links | `src/data/site.ts` |
| Site URL (needed for deploy) | `astro.config.mjs` |
| Project list and metadata | `scripts/sync-projects.mjs` |
| Home page text | `src/pages/index.astro` |
| Typography and colours | `src/styles/global.css` (colour variables at the top) |
| Resume | `public/resume.pdf`, then set `hasResume: true` in `site.ts` |
| Your photo, home banner image | put them in `public/`, then set `photo` / `heroImage` in `site.ts` |
| Project card thumbnail | put it in `public/thumbs/`, then add `thumbnail: '/thumbs/<id>.png'` to that project's `meta` in `scripts/sync-projects.mjs` |
| About page entries | `src/pages/about.astro` |

Images left unset show a labelled placeholder box.

## Deploy

Pushing to `main` builds and publishes via `.github/workflows/deploy.yml`.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
