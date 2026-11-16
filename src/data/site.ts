// ─────────────────────────────────────────────────────────────────────────────
// Your personal content: name, intro, contact, About page.
// Projects are not here: each project is a folder in src/content/projects/ (see README).
//
// Anything marked PLACEHOLDER is example content to replace. DRAFT is text written for you to rewrite.
// Your photo and CV are files, not settings: see src/data/files.ts.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Sujeet Palanisamy',
  role: 'Mechanical / FEA engineer', // PLACEHOLDER: your title
  // One or two sentences under your name on the home page.
  intro:
    'DRAFT. I build finite element models and use them to size structures. I also write code, including language-model tools, that takes the repetitive work out of analysis.',
  // Shown in search results and link previews.
  description: 'Mechanical engineer. Finite element analysis, structural optimisation, and automation.',

  email: '', // PLACEHOLDER: the address you want public. Leave '' to show a placeholder.
  links: {
    linkedin: 'https://www.linkedin.com/in/sujeet-palanisamy-622b4a257/',
    github: 'https://github.com/TheShade88',
  },
};

// About page, one string per paragraph. The first paragraph is also shown on the home page.
export const about = [
  'PLACEHOLDER. Who you are and what you work on, in two or three sentences.',
  'PLACEHOLDER. Where you work now or what you have done most recently, and what you are good at.',
  'PLACEHOLDER. What you are looking for or curious about next. Optional.',
];

// Experience, newest first. The first two also appear on the home page.
// Write dates like '2024 – Present'; an entry whose dates end in 'Present' is labelled "Now" on the home page.
export const experience: {
  dates: string;
  role: string;
  company: string;
  url?: string; // company website, optional
  summary: string;
  skills?: string[];
}[] = [
  {
    dates: '2024 – Present',
    role: 'PLACEHOLDER role',
    company: 'Company',
    summary: 'PLACEHOLDER. Two lines on what you did and the result, with a number if you have one.',
    skills: ['FEA', 'Python'],
  },
  {
    dates: '2022 – 2024',
    role: 'PLACEHOLDER role',
    company: 'Company',
    summary: 'PLACEHOLDER. Two lines on what you did and the result.',
    skills: ['CAD', 'Testing'],
  },
];

// Education, newest first. The first one also appears on the home page.
export const education: { dates: string; degree: string; school: string; note?: string }[] = [
  { dates: '2018 – 2022', degree: 'PLACEHOLDER degree', school: 'University' },
];

// Skills, grouped. Keep each list short and honest.
export const skills: { group: string; items: string[] }[] = [
  { group: 'Simulation', items: ['PLACEHOLDER', 'CalculiX', 'Femap'] },
  { group: 'Code', items: ['Python', 'PLACEHOLDER'] },
  { group: 'AI', items: ['LLM agents', 'PLACEHOLDER'] },
];
