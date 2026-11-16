# CLAUDE.md: read first

Personal portfolio site of Sujeet Palanisamy (mechanical / FEA engineer; projects in LLMs, engineering
automation and structural optimisation). Astro 7 static site, deployed to GitHub Pages at
https://theshade88.github.io from the `main` branch.

This repo is worked on from a laptop **and from Claude on a phone (cloud sessions)**. Anything a session
needs to know must be in this file or the README, not in local memory.

## Working rules (from the owner, apply to every task)

1. Plan in phases. Present the plan and get approval before doing the work.
2. Suggestions are welcome; when told "only focus on current task", don't deviate.
3. Suggest improvements to the owner's prompt or approach when useful.
4. **Never push to `main` without explicit approval.** Pushing to `main` publishes the live site.
   Work on a branch (currently `rebuild`) and push that. The owner publishes by merging a pull request into `main`.
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
| Shared pieces: figure or placeholder, photo, status mark, contact links | `src/components/` |
| Colours (teal, light and dark, at the top), shared styles, long-form text styles | `src/styles/global.css` |
| Redirects (`/writing` goes home) | `astro.config.mjs` |
| Design mockups from the rebuild (to be removed before the PR) | `design/mockups/` |
| Deploy workflow | `.github/workflows/deploy.yml` (runs on push to `main` only) |

## Projects and `npm run sync`

Every project is a folder `src/content/projects/<id>/` with `index.md`: frontmatter (title, summary, status,
fields, optional date, result, numbers, featured, cover, thumbnail, preview, tags, repo) and optional write-up
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

## Status (keep this section current)

- **Rebuild in progress on branch `rebuild`** (started 2026-11-13; the old design stays in `main` at 15936c5).
  Goal: a simple portfolio that shows skills and projects and does not look AI-generated or templated.
  - Done: review of the current site (verdict: projects buried, layout is a copy of a common developer
    template, two menus, two project lists, placeholders visible to visitors). Keep Astro + GitHub Pages,
    project folders, article/report pages, IBM Plex, one colour family.
  - Decided by the owner: home page is a summary (visitors judge the site by it) pointing to separate
    Projects and About pages with the detail. In-progress/planned projects shown in an "in progress" list.
    Photo: yes. Light/dark follows the device setting (no toggle). Real project images will come later:
    design assumes images, with labelled placeholders meanwhile. Project list stays PLACEHOLDER until the
    owner fills it in. Projects need a status (built / in progress / planned) and a field.
  - Three design directions were mocked up in `design/mockups/` (build them with
    `node design/mockups/build.mjs . <out dir>`). **Chosen (2026-11-16): direction A ("Report", teal) for the
    home page and overall look, with C's register table (filter by field) on the Projects page.**
    Yes to changing `npm run sync`: each project's frontmatter is owned by this repo; sync only copies the
    article text, report and figures.
  - Phases 1-3 done (2026-11-16): project data model and schema, sync script that keeps the frontmatter
    (tested against a fake source), shared layout, home page (A), Projects register with field filter (C),
    About page, restyled write-up/report pages, 404, `/writing` redirect. Old URLs checked; no sideways
    scroll or clipping at 12 window sizes (320 px phone to 2560x1440), light and dark.
    **Owner's choice: placeholders stay visible on the live site for now**; seven `placeholder-*` project
    folders demonstrate the layout and are to be replaced or deleted by the owner.
  - Waiting on the owner (list given 2026-11-16): real text in `src/data/site.ts` (role, DRAFT intro, email,
    About, experience, education, skills); `src/assets/photo.jpg`; `public/cv.pdf`; real projects replacing the
    `placeholder-*` folders, with cover figures; a small `thumbnail` for fly-fea; review fly-fea's new frontmatter
    (key numbers, caption) and the field names in `src/data/fields.ts`.
    Until this merges, don't run `npm run sync` on `main` (the old script there rewrites the frontmatter).
  - Next: phase 4 (full testing: zoom, accessibility check, page weight) and phase 5 (remove `design/`,
    final docs, PR from `rebuild` into `main`). Each phase approved separately.
- Live on `main` (PR #1, merged): split-layout home page (About, Experience, Projects, Writing) built with PLACEHOLDER
  content. Combined with the teal design: teal header with Home / About / Projects tabs on every page,
  teal side panel with photo and background-image placeholders (`site.photo`, `site.heroImage`),
  project thumbnails (`thumbnail`, else `image`, else placeholder). Old `/about`, `/projects`,
  `/writing` URLs redirect to home-page sections (`astro.config.mjs`).
  The side panel is pinned at window height on wide screens; its spacing scales with window height,
  and a small script in `index.astro` unpins it (scrolls with the page) when the contents don't fit,
  so it is never cut off on short laptop screens, display scaling or browser zoom. Waiting on the owner's real experience, education, skills, other projects, role/tagline,
  public email, resume PDF. Photo: none for now (`site.photo`).
- The fly-fea write-up still needs the owner's rewrite (a `[link]` placeholder at the end of the post;
  the report's opening line says "in this repository").
- Later: RSS/writing pages, analytics, custom domain, LinkedIn rewrite.

## Astro reference

Docs: https://docs.astro.build. Consult the routing, content collections and styling guides before
changing those areas.
