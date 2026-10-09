// Copies each project's write-up from its own repo into the site, so the project repo stays
// the single source of truth. Run with `npm run sync` after editing the docs there.
// The text is copied as-is; only the leading "draft" note and the frontmatter are handled here.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const projects = [
  {
    id: 'fly-fea',
    source: 'D:/Claude/FEA fly/public/fly-fea/docs',
    post: 'blog-post.md',
    report: 'technical-report.md',
    // Figure used as the link preview on LinkedIn, Reddit etc. (about 1.9:1 works best).
    preview: 'loop_diagram.png',
    meta: {
      title: "What a fruit fly's taste buds can tell you about steel",
      summary: 'A simulated fruit-fly brain, used unchanged, sizes the steel members of an offshore wind-turbine jacket.',
      date: '2026-10-01',
      // repo: 'https://github.com/YOUR-USERNAME/fly-fea',
    },
  },
];

// Drops an italic "*... draft ...*" note at the top and the "---" rule after it.
function stripDraftNote(md) {
  return md.replace(/^(# .*\n+)\*[^\n]*\*\n+---\n+/, '$1');
}

function frontmatter(meta) {
  const lines = Object.entries(meta).map(([k, v]) => `${k}: ${JSON.stringify(v)}`);
  return `---\n${lines.join('\n')}\n---\n\n`;
}

for (const p of projects) {
  if (!existsSync(p.source)) {
    console.warn(`skip ${p.id}: ${p.source} not found`);
    continue;
  }
  const dest = join('src/content/projects', p.id);
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });

  const post = readFileSync(join(p.source, p.post), 'utf8');
  const meta = { ...p.meta };
  if (p.preview) {
    mkdirSync('public/og', { recursive: true });
    cpSync(join(p.source, 'figures', p.preview), join('public/og', `${p.id}.png`));
    meta.image = `/og/${p.id}.png`;
  }
  writeFileSync(join(dest, 'index.md'), frontmatter(meta) + stripDraftNote(post));

  if (p.report) {
    const report = readFileSync(join(p.source, p.report), 'utf8');
    writeFileSync(join(dest, 'report.md'), stripDraftNote(report));
  }
  cpSync(join(p.source, 'figures'), join(dest, 'figures'), { recursive: true });
  console.log(`synced ${p.id}`);
}
