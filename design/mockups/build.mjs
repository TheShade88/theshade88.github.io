// Builds self-contained mockup pages: inlines the IBM Plex fonts and the fly-fea figures as data URIs.
// Usage, from the repo root: node design/mockups/build.mjs . <out dir>
// Writes one self-contained HTML file per mockup (open it in any browser). Not part of the site build.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const [repo, out] = process.argv.slice(2).map((p) => resolve(p));
const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(repo, 'package.json'));
const sharp = require('sharp');

const b64 = (p) => readFileSync(join(repo, 'node_modules', p)).toString('base64');
const face = (family, weight, file) =>
  `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:swap;src:url(data:font/woff2;base64,${b64(file)}) format('woff2')}`;
const fonts = [
  face('IBM Plex Sans Variable', '100 700', '@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2'),
  face('IBM Plex Mono', 400, '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2'),
  face('IBM Plex Mono', 500, '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2'),
].join('\n');

const figs = join(repo, 'src/content/projects/fly-fea/figures');
const img = {};
for (const name of ['jacket_utilisation', 'convergence']) {
  const buf = await sharp(join(figs, `${name}.png`)).resize({ width: 1400 }).webp({ quality: 82 }).toBuffer();
  img[name] = `data:image/webp;base64,${buf.toString('base64')}`;
}

mkdirSync(out, { recursive: true });
for (const f of readdirSync(here).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(join(here, f), 'utf8')
    .replace('/*FONTS*/', fonts)
    .replace(/img:([a-z_]+)/g, (_, n) => img[n]);
  writeFileSync(join(out, f), html);
  console.log('built', f);
}
