# CLAUDE.md: read first

Personal portfolio site of Sujeet Palanisamy (project engineer in marine and offshore cable lay at Dimension
Consultants; projects in FEA, naval architecture, cable engineering, engineering automation and LLMs). Astro 7 static site, deployed to GitHub Pages at
https://theshade88.github.io from the `main` branch.

This repo is worked on from a laptop **and from Claude on a phone (cloud sessions)**. Anything a session
needs to know must be in this file or the README, not in local memory.

## Working rules (from the owner, apply to every task)

1. Plan in phases. Present the plan and get approval before doing the work.
2. Suggestions are welcome; when told "only focus on current task", don't deviate.
3. Suggest improvements to the owner's prompt or approach when useful.
4. **Never push to `main` without explicit approval.** Pushing to `main` publishes the live site.
   Work on a branch and push that (`rebuild` until its pull request merges; then a new branch from `main` per task).
   The owner publishes by merging a pull request into `main`.
5. Explain tooling from first principles; the owner is strong in engineering, newer to web tooling.

## Writing style for any site copy

The owner wants the site to read as written by a person, not generated. When drafting text:
no em dashes, no lists-of-three by habit, no "passionate / leverage / delve / seamless", short plain
sentences, first person, concrete numbers. Mark drafts with `PLACEHOLDER` or `DRAFT` so the owner can
rewrite them. Never invent facts about the owner's experience.

## Where things are

| What | File |
|---|---|
| Personal content: name, role, intro, email, links, About text, experience, education, skills | `src/data/site.ts` |
| Photo and CV: picked up automatically from `src/assets/photo.jpg` and `public/cv.pdf` | `src/data/files.ts` |
| The list of fields (project `fields` must use these names; Projects page filter) | `src/data/fields.ts` |
| Projects: one folder each, frontmatter checked by the schema | `src/content/projects/<id>/`, schema in `src/content.config.ts` |
| Project sorting, status labels, "has a page" rule | `src/data/projects.ts` |
| Home page (intro, selected work, in progress, About summary) | `src/pages/index.astro` |
| Projects page (register table with field filter) | `src/pages/projects/index.astro` |
| About page | `src/pages/about.astro` |
| Write-up and report pages | `src/pages/projects/[id]/`, layout `src/layouts/Article.astro` |
| Page frame: head, header links, footer, link-preview image | `src/layouts/Base.astro` |
| Shared pieces: figure or placeholder, photo, status mark, contact links, "Open project" button, small-projects list | `src/components/` |
| Colours (teal, light and dark, at the top), shared styles, long-form text styles | `src/styles/global.css` |
| Redirects (`/writing` goes home) | `astro.config.mjs` |
| Deploy workflow | `.github/workflows/deploy.yml` (runs on push to `main` only) |

## Projects and `npm run sync`

Every project is a folder `src/content/projects/<id>/` with `index.md`: frontmatter (title, summary, status,
fields, optional date, result, numbers, featured, small, link, cover, thumbnail, preview, tags, repo) and optional write-up
text below it. No text: listed, no page. Optional `report.md` and `figures/`. README "Add a project" has the
full example. The build validates the frontmatter against `src/content.config.ts`.

On the laptop, `npm run sync` copies each listed project's article text, `report.md` and `figures/` from its own
repo (e.g. `D:/Claude/FEA fly/public/fly-fea/docs`). It **keeps the frontmatter**, which this repo owns, so
titles, status and fields can be edited from any machine. The source folders do not exist in cloud sessions;
there the script prints "skip". The article text and figures of a synced project are still overwritten by the
next sync, so edit those in the source repo (and tell the owner if you change them here).

## Commands

```
npm install
npm run dev      # local preview at http://localhost:4321 (use `astro dev --background` in agents)
npm run build    # must pass before committing
```

`astro preview` (serves the built `dist/`) runs as a background service in Astro 7: stop it with
`npx astro preview stop` from the same folder. If port 4321 is taken it silently starts on 4322, so check the
printed address before testing against it.

## Status (keep this section current)

- **Rebuild finished on branch `rebuild`; pull request #3 into `main` open** (2026-11-17). Merging it publishes the
  new site. The previous design stays in git history at 15936c5; the three design mockups made during the rebuild
  are at dae25b6 (`design/mockups/`). After the merge, start new work on a fresh branch from `main`.
- **Design (owner's choices).** Home page is a summary (intro, selected work, in progress, About) with separate
  Projects and About pages. Direction A "Report" in teal; C's register table (filter by field) on the Projects
  page. Links are shaded; project titles are plain text with a separate "Open project" button. Light/dark follows
  the device. Small projects (`small: true`) have their own compact list on the Projects page; the home page shows
  only a link to them (`site.smallProjectsOnHome: 0`). Placeholders stay visible on the live site until the owner
  replaces them.
- **Content.** Real text in `src/data/site.ts` from the owner's notes; intro, About and experience were reworded by
  Claude (`DRAFT` comments). Owner confirmed: personal email only; client project and vessel names may stay;
  B.Tech; SMC and T&I spelled out. The "Standards" skill groups came from Claude's list (DRAFT: owner to remove any
  not worked to).
- **Waiting on the owner.** `src/assets/photo.jpg`; `public/cv.pdf`; real projects and small projects replacing the
  `placeholder-*` folders, with figures; a small `thumbnail` for fly-fea; review of fly-fea's frontmatter (key
  numbers, caption), the standards list and which extra software to add (list given 2026-11-17). The fly-fea
  write-up still needs the owner's rewrite (a `[link]` placeholder at the end; the report's opening line says "in
  this repository"); that text comes from the fly-fea repo via `npm run sync`. Until the pull request merges,
  don't run `npm run sync` on `main` (the old script there rewrites the frontmatter).
- **Tested** (phase 4, repeated before the pull request): 7 pages at 36 window sizes, including browser zoom to
  400 % and browser text size 200 %: no sideways scroll, clipped, edge-touching or overlapping text. axe-core
  WCAG 2.2 AA: no violations in light and dark. Every link reachable by keyboard. GitHub builds with Node 24;
  Astro 7.4.12 needs Node 22.23.4 or newer.
  Notes: Astro 7's default Markdown engine (Sätteri) needs `@astrojs/markdown-remark` before remark/rehype plugins
  work, so the write-up table fix is a small script in `Article.astro`. Label/value rows stack via
  `@media (max-width: 22em)`, which follows the reader's browser text size.
- **Next.** Phase 6 (planned 2026-11-17, waiting for the owner's decisions): custom domain, visitor numbers,
  robots.txt, sitemap and AI crawler rules. Later: writing/RSS pages, LinkedIn rewrite.

## Astro reference

Docs: https://docs.astro.build. Consult the routing, content collections and styling guides before
changing those areas.
