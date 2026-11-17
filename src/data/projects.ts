import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Status = Project['data']['status'];

export const statusLabel: Record<Status, string> = {
  built: 'Built',
  'in-progress': 'In progress',
  planned: 'Planned',
};

const statusOrder: Record<Status, number> = { built: 0, 'in-progress': 1, planned: 2 };

// All projects: built first, then in progress, then planned; newest first within each; undated last.
// Drafts show in `npm run dev` only.
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort(
    (a, b) =>
      statusOrder[a.data.status] - statusOrder[b.data.status] ||
      (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0) ||
      a.data.title.localeCompare(b.data.title),
  );
}

// A project has its own page only if index.md has text below the frontmatter.
export const hasPage = (p: Project) => Boolean(p.body?.trim());
export const projectUrl = (p: Project) => (hasPage(p) ? `/projects/${p.id}/` : undefined);

export const year = (p: Project) => p.data.date?.getFullYear();

// Small projects are listed separately ("Small projects"); everything else is a main project.
export const isSmall = (p: Project) => p.data.small;
// Where a small project's button goes: its own page if it has one, else its link.
export const smallUrl = (p: Project) => projectUrl(p) ?? p.data.link;
export const monthYear = (d: Date) => d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });

// Link-preview image (LinkedIn etc.) for pages without one of their own: the newest featured project's
// preview image, else its cover.
export async function defaultPreview() {
  const p = (await getProjects()).find((p) => p.data.featured && (p.data.preview || p.data.cover));
  return p?.data.preview ?? p?.data.cover;
}
