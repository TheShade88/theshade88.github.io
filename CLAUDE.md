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
   Work on a branch (currently `redesign`) and push that; merge to `main` only when asked.
5. Explain tooling from first principles; the owner is strong in engineering, newer to web tooling.

## Writing style for any site copy

The owner wants the site to read as written by a person, not generated. When drafting text:
no em dashes, no lists-of-three by habit, no "passionate / leverage / delve / seamless", short plain
sentences, first person, concrete numbers. Mark drafts with `PLACEHOLDER` or `DRAFT` so the owner can
rewrite them. Never invent facts about the owner's experience.

## Where things are

| What | File |
|---|---|
| All home-page content (role, tagline, about, experience, education, skills, smaller projects, writing, links) | `src/data/site.ts` |
| Home page layout (split: fixed sidebar + scrolling sections) | `src/pages/index.astro` |
| Project write-ups (one folder each: `index.md`, optional `report.md`, `figures/`) | `src/content/projects/<id>/` |
| Project list metadata (title, summary, date, tags, metric, thumbnail) | `scripts/sync-projects.mjs` |
| Article layout (project + report pages) | `src/layouts/Article.astro` |
| Colours (teal palette variables at the top), header tabs, fonts, long-form text styles | `src/styles/global.css` |
| Deploy workflow | `.github/workflows/deploy.yml` (runs on push to `main` only) |

## Project content and `npm run sync`

On the laptop, `npm run sync` copies each project's write-up from its own repo (e.g.
`D:/Claude/FEA fly/public/fly-fea/docs`) into `src/content/projects/<id>/`. Those source folders do **not**
exist in cloud sessions; there the script just prints "skip". In a cloud session, edit the copies in
`src/content/projects/` directly, and tell the owner, because the next sync on the laptop overwrites them
unless the same edit is made in the source repo.

To add a project that has a write-up: add a folder `src/content/projects/<id>/` with `index.md` (frontmatter:
title, summary, date, tags, metric, image) and its figures, and copy a thumbnail to `public/og/<id>.png`.
Projects without a write-up go in `moreProjects` in `src/data/site.ts`.

## Commands

```
npm install
npm run dev      # local preview at http://localhost:4321 (use `astro dev --background` in agents)
npm run build    # must pass before committing
```

## Status (keep this section current)

- Live: plain one-page version on `main`.
- `redesign` branch: split-layout home page (About, Experience, Projects, Writing) built with PLACEHOLDER
  content. Combined with the teal design: teal header with Home / About / Projects tabs on every page,
  teal side panel with photo and background-image placeholders (`site.photo`, `site.heroImage`),
  project thumbnails (`thumbnail`, else `image`, else placeholder). Old `/about`, `/projects`,
  `/writing` URLs redirect to home-page sections (`astro.config.mjs`). Waiting on the owner's real experience, education, skills, other projects, role/tagline,
  public email, resume PDF. Photo: none for now (`site.photo`).
- The fly-fea write-up still needs the owner's rewrite (a `[link]` placeholder at the end of the post;
  the report's opening line says "in this repository").
- Later: RSS/writing pages, analytics, custom domain, LinkedIn rewrite.

## Astro reference

Docs: https://docs.astro.build. Consult the routing, content collections and styling guides before
changing those areas.
