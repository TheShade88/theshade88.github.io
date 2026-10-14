// @ts-check
import { defineConfig } from 'astro/config';

// On GitHub Actions the repo owner is known, so the site URL is filled in automatically
// (https://<username>.github.io). Replace with your custom domain if you add one.
const owner = process.env.GITHUB_REPOSITORY_OWNER;

// https://astro.build/config
export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  // Older separate pages now live as sections of the home page; keep their links working.
  redirects: {
    '/about': '/#about',
    '/writing': '/#writing',
    '/projects': '/#projects',
  },
});
