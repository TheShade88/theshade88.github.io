// Copies each project's write-up from its own repo into the site. Run with `npm run sync`.
//
// Who owns what:
// - The project's own repo owns the article text, the technical report and the figures.
// - This site repo owns the frontmatter: the block between the --- lines at the top of
//   src/content/projects/<id>/index.md (title, status, fields, cover image and so on).
//
// So sync replaces the text below the frontmatter, report.md and the figures/ folder, and never
// touches the frontmatter. Edit a project's title or status in its index.md here, from any machine.
// Other files you put in the project folder (e.g. a thumbnail next to index.md) are left alone.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const projects = [
  {
    id: 'fly-fea',
    source: 'D:/Claude/FEA fly/public/fly-fea/docs',
    post: 'blog-post.md',
    report: 'technical-report.md', // optional; leave out if the project has no report
  },
];

// Frontmatter for a project synced for the first time. Fill it in afterwards.
const starter = `---
title: "PLACEHOLDER title"
summary: "PLACEHOLDER. One line on what it is."
status: in-progress
fields: ["FEA"]
---
`;

const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;

// Drops an italic "*... draft ...*" note at the top and the "---" rule after it.
function stripDraftNote(md) {
  return md.replace(/^(# .*\n+)\*[^\n]*\*\n+---\n+/, '$1');
}

for (const p of projects) {
  if (!existsSync(p.source)) {
    console.warn(`skip ${p.id}: ${p.source} not found`);
    continue;
  }
  const dest = join('src/content/projects', p.id);
  mkdirSync(dest, { recursive: true });

  const indexPath = join(dest, 'index.md');
  const current = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';
  const kept = current.match(FRONTMATTER)?.[0];
  const post = stripDraftNote(readFileSync(join(p.source, p.post), 'utf8'));
  writeFileSync(indexPath, `${kept ?? starter}\n${post}`);

  const reportPath = join(dest, 'report.md');
  if (p.report) writeFileSync(reportPath, stripDraftNote(readFileSync(join(p.source, p.report), 'utf8')));
  else rmSync(reportPath, { force: true });

  // Replaced as a whole, so figures deleted in the project repo don't linger here.
  rmSync(join(dest, 'figures'), { recursive: true, force: true });
  if (existsSync(join(p.source, 'figures'))) {
    cpSync(join(p.source, 'figures'), join(dest, 'figures'), { recursive: true });
  }

  console.log(kept ? `synced ${p.id}` : `synced ${p.id} (new: fill in the frontmatter in ${indexPath})`);
}
