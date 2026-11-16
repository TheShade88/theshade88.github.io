// Files that switch parts of the site on just by being there. No code change needed.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { ImageMetadata } from 'astro';

// Your photo: save it as src/assets/photo.jpg (or .jpeg, .png, .webp). Portrait, about 4:5, at least 600 px wide.
// It replaces the photo placeholder on the home and About pages.
const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photo.{jpg,jpeg,png,webp}', {
  eager: true,
});
export const photo: ImageMetadata | undefined = Object.values(photos)[0]?.default;

// Your CV: save it as public/cv.pdf. The CV links then point to it instead of showing a placeholder.
export const cvUrl: string | undefined = existsSync(join(process.cwd(), 'public', 'cv.pdf')) ? '/cv.pdf' : undefined;
