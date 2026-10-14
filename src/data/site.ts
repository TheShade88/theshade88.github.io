// ─────────────────────────────────────────────────────────────────────────────
// All the content on the home page lives in this file.
// Edit the text here; the page layout picks it up automatically.
// Anything marked PLACEHOLDER is example content to replace.
// Empty strings and empty lists are simply not shown.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Sujeet Palanisamy',
  role: 'Mechanical / FEA Engineer', // PLACEHOLDER: your title
  tagline: 'I automate structural analysis with code and language models.', // PLACEHOLDER: one line
  // Shown in search results and link previews.
  description: 'Mechanical engineer. Finite element analysis, structural optimisation, and automation.',

  // Square photo at public/photo.jpg, then set to '/photo.jpg'. Leave '' to show a placeholder.
  photo: '',
  // Background for the side panel on the home page, e.g. '/hero.jpg' in public/.
  // Leave '' to show the blueprint grid placeholder. A teal tint keeps the text readable.
  heroImage: '',

  email: '', // the address you want public
  links: {
    linkedin: 'https://www.linkedin.com/in/sujeet-palanisamy-622b4a257/',
    github: 'https://github.com/TheShade88',
  },
  // Resume PDF at public/resume.pdf, then set to '/resume.pdf'. Leave '' for none.
  resume: '',
};

// About section: one string per paragraph.
export const about = [
  'PLACEHOLDER. Who you are and what you work on, in two or three sentences.',
  'PLACEHOLDER. Where you work now or what you have done most recently, and what you are good at.',
  'PLACEHOLDER. What you are looking for or curious about next. Optional.',
];

// Experience, newest first.
export const experience: {
  dates: string; // e.g. '2023 — Present'
  role: string;
  company: string;
  url?: string; // company website, optional
  summary: string;
  skills?: string[];
}[] = [
  {
    dates: '2024 — Present',
    role: 'PLACEHOLDER Role',
    company: 'Company',
    summary: 'PLACEHOLDER. Two lines on what you did and the result, with a number if you have one.',
    skills: ['FEA', 'Python'],
  },
  {
    dates: '2022 — 2024',
    role: 'PLACEHOLDER Role',
    company: 'Company',
    summary: 'PLACEHOLDER. Two lines on what you did and the result.',
    skills: ['CAD', 'Testing'],
  },
];

export const education: { dates: string; degree: string; school: string; note?: string }[] = [
  { dates: '2018 — 2022', degree: 'PLACEHOLDER Degree', school: 'University' },
];

// Skills, grouped. Keep each list short and honest.
export const skills: { group: string; items: string[] }[] = [
  { group: 'Simulation', items: ['PLACEHOLDER', 'CalculiX', 'Femap'] },
  { group: 'Code', items: ['Python', 'PLACEHOLDER'] },
  { group: 'AI', items: ['LLM agents', 'PLACEHOLDER'] },
];

// Smaller projects that don't have a full write-up page.
// Projects WITH a write-up come from src/content/projects/ (see README).
export const moreProjects: { title: string; summary: string; url?: string; tags?: string[]; year?: string }[] = [
  {
    title: 'PLACEHOLDER project',
    summary: 'Two lines on what it does and why it is interesting.',
    tags: ['LLM', 'Automation'],
    year: '2026',
  },
];

// Writing: posts on other platforms or on this site, newest first.
export const writing: { year: string; title: string; url: string }[] = [];
