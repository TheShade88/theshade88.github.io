# Portfolio

Personal site of Sujeet Palanisamy, built with [Astro](https://docs.astro.build) and published on
GitHub Pages at https://theshade88.github.io.

## How it works

Astro is a build tool. `npm run build` reads the page templates (`src/pages/`), the content
(`src/data/` and `src/content/projects/`) and the images, and writes plain HTML, CSS and resized
images to `dist/`. GitHub Pages serves those files as they are; nothing runs on a server.
When `main` changes, a GitHub Action (`.github/workflows/deploy.yml`) runs the build and publishes.

## Run locally

```
npm install
npm run dev      # live preview at http://localhost:4321, updates as you edit
npm run build    # what GitHub runs; must pass before you commit
```

## Where to edit what

| What | Where |
|---|---|
| Name, role, intro line, email, About text, experience, education, skills | `src/data/site.ts` |
| Your photo | save it as `src/assets/photo.jpg` (portrait, about 4:5); it appears automatically |
| Your CV | save it as `public/cv.pdf`; the CV links appear automatically |
| The list of fields (Projects page filter) | `src/data/fields.ts` |
| Projects | one folder each in `src/content/projects/` (see below) |
| Colours, fonts, shared styles | `src/styles/global.css` (colours at the top) |
| Pages | `src/pages/`: `index.astro` (home), `projects/`, `about.astro`; frame in `src/layouts/` |

Anything marked `PLACEHOLDER` is example content to replace; `DRAFT` is text written for you to
rewrite. Missing images show a labelled placeholder box.

## Add a project

1. Copy a folder in `src/content/projects/` (for example `placeholder-cable`) and rename it.
   The folder name becomes the address: `src/content/projects/my-project/` is `/projects/my-project/`.
2. Fill in the block at the top of its `index.md` (the "frontmatter"):

   ```yaml
   ---
   title: "Project title"
   summary: "One line on what it is."
   status: built                      # built, in-progress or planned
   fields: ["Naval architecture"]     # names from src/data/fields.ts
   date: "2026-05-01"                 # optional: sorts the lists, shows the year
   result: "One line with a number"   # optional: shown in the project lists
   featured: true                     # optional: show it under "Selected work" on the home page
   cover: "./figures/main.png"        # optional: the main figure (a placeholder shows until set)
   coverAlt: "What the figure shows"  # describe the figure for screen readers
   coverHint: "hull lines or render"  # what the placeholder says until a cover is set
   caption: "Caption under the figure on the home page"
   numbers:                           # optional: key numbers, shown when it is the lead project on the home page
     - value: "339 t"
       label: "What the number means"
   thumbnail: "./thumb.png"           # optional: small image for the Projects list (else the cover)
   preview: "./figures/wide.png"      # optional: image shown when the link is shared (else the cover)
   tags: ["Python", "CalculiX"]       # optional: tools, shown on the write-up page
   repo: "https://github.com/..."     # optional: link to the code
   ---
   ```

3. Write the write-up below the frontmatter in Markdown, with figures in a `figures/` folder next
   to it. A project with no text is listed but has no page of its own. A `report.md` in the same
   folder becomes a "Technical report" page.
4. Run `npm run build`. If an entry is missing or misspelled, the build stops and names the file.

The newest featured project is shown large on the home page; the next three featured ones below it.

### Projects whose write-up lives in another repo

List them in `scripts/sync-projects.mjs` and run `npm run sync` on the laptop. Sync copies the
article text, `report.md` and `figures/` from the project's repo. It never touches the frontmatter,
so titles, status and fields are edited here, from any machine. In cloud sessions the source folders
don't exist and sync prints "skip".

## Deploy

Merging a pull request into `main` publishes the site. One-time setup (done): repo
**Settings → Pages → Source: GitHub Actions**.

See `CLAUDE.md` for working rules and current status (also used by Claude sessions on the phone).
