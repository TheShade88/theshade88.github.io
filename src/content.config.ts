import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { fields } from './data/fields';

// One folder per project: src/content/projects/<id>/index.md, plus optional report.md and figures/.
// The block between the --- lines at the top of index.md (the "frontmatter") is checked against the
// schema below on every build. A missing or misspelled entry stops the build and names the file.
// The text below the frontmatter is the write-up. A project with no text gets a row in the lists
// but no page of its own.
const folderId = ({ entry }: { entry: string }) => entry.split('/')[0];

const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects', generateId: folderId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one line, shown in every list
      status: z.enum(['built', 'in-progress', 'planned']),
      fields: z.array(z.enum(fields)).min(1), // see src/data/fields.ts
      date: z.coerce.date().optional(), // when it was finished or published; sorts the lists, shows the year
      result: z.string().optional(), // one headline line with a number, shown in the project lists
      // Small table of key numbers, shown when the project is the lead project on the home page.
      numbers: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      featured: z.boolean().default(false), // show under "Selected work" on the home page
      // Images: paths relative to index.md, e.g. ./figures/plot.png. Astro resizes them at build time.
      cover: image().optional(), // the project's main figure; a labelled placeholder shows until it is set
      coverAlt: z.string().optional(), // describes the cover for screen readers
      coverHint: z.string().optional(), // what the placeholder says should go there, e.g. "hull lines or render"
      caption: z.string().optional(), // caption under the cover on the home page
      thumbnail: image().optional(), // small image for the Projects list; falls back to the cover
      preview: image().optional(), // link-preview image for LinkedIn etc.; falls back to the cover
      tags: z.array(z.string()).default([]), // tools and topics, shown on the write-up page
      repo: z.string().url().optional(), // link to the code
      draft: z.boolean().default(false), // true: shown by `npm run dev` only, not on the live site
    }),
});

// Long-form technical reports. No frontmatter needed; the title is the report's own H1.
const reports = defineCollection({
  loader: glob({ pattern: '*/report.md', base: './src/content/projects', generateId: folderId }),
});

export const collections = { projects, reports };
