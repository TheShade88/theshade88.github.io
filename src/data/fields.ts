// The fields a project can belong to, in the order they appear on the site.
// A project's `fields` list must use these exact names (the build checks the spelling).
// The Projects page shows one filter button for each field that has at least one project.
// To add a field: add it here, then use it in a project's frontmatter.
export const fields = [
  'Structural engineering',
  'Naval architecture',
  'Product design',
  'Cable engineering',
  'Vessel and hull design',
  'FEA',
  'Structural optimisation',
  'Engineering automation',
  'LLMs',
] as const;

export type Field = (typeof fields)[number];

