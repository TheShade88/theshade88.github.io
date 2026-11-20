// @ts-check
import { defineConfig } from 'astro/config';

// On GitHub Actions the repo owner is known, so the site URL is filled in automatically
// (https://<username>.github.io). Replace with your custom domain if you add one.
const owner = process.env.GITHUB_REPOSITORY_OWNER;

// https://astro.build/config
export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  // /about and /projects are real pages again. /writing had its own page once; there is no writing yet,
  // so it goes to the home page rather than a "not found" page.
  redirects: {
    '/writing': '/',
  },
});
