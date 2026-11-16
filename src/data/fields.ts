// The fields a project can belong to, in the order they appear on the site.
// A project's `fields` list must use these exact names (the build checks the spelling).
// The Projects page shows one filter button for each field that has at least one project.
// To add a field: add it here, then use it in a project's frontmatter.
export const fields = [
  'FEA',
  'Structural optimisation',
  'Naval architecture',
  'Vessel and hull design',
  'Cable engineering',
  'Engineering automation',
  'LLMs',
] as const;

export type Field = (typeof fields)[number];

// The same list as it reads inside a sentence: "FEA, structural optimisation, ..., LLMs".
export const fieldsInSentence = fields
  .map((f) => (/^[A-Z]{2}/.test(f) ? f : f[0].toLowerCase() + f.slice(1)))
  .join(', ');
