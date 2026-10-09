import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per project: src/content/projects/<id>/index.md (+ optional report.md, figures/).
// These folders are written by `npm run sync`, not edited by hand.
const folderId = ({ entry }: { entry: string }) => entry.split('/')[0];

const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects', generateId: folderId }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    repo: z.string().url().optional(),
    image: z.string().optional(), // link-preview image under public/, set by the sync script
    draft: z.boolean().default(false),
  }),
});

// Long-form technical reports. No frontmatter needed; the title is the report's own H1.
const reports = defineCollection({
  loader: glob({ pattern: '*/report.md', base: './src/content/projects', generateId: folderId }),
});

export const collections = { projects, reports };
