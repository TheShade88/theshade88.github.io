// ─────────────────────────────────────────────────────────────────────────────
// Your personal content: name, intro, contact, About page.
// Projects are not here: each project is a folder in src/content/projects/ (see README).
//
// Anything marked PLACEHOLDER is example content to replace. A "DRAFT" comment marks text that
// Claude reworded from your notes (2026-11-17): the facts are yours, the wording is for you to check.
// Your photo and CV are files, not settings: see src/data/files.ts.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Sujeet Palanisamy',
  role: 'Project Engineer',
  // One or two sentences under your name on the home page.
  // DRAFT: your intro, stated as what you do.
  intro:
    "I'm a project engineer in the marine and offshore cable lay industry. I do the engineering analysis, design equipment and products, design hulls and vessel modifications, and manage submarine cable transport and installation (T&I) work.",
  // The "Fields" line under the intro, on the home and About pages.
  focus: 'Structural engineering, naval architecture and product design, specialising in the cable lay industry.',
  // Shown in search results and link previews. DRAFT.
  description:
    'Project engineer in marine and offshore cable lay: vessel conversions, hull structural analysis, naval architecture and cable lay equipment design.',

  email: 'sujeetpalanisamy2@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sujeet-palanisamy-622b4a257/',
    github: 'https://github.com/TheShade88',
  },
};

// About page, one string per paragraph. The first paragraph is also shown on the home page.
// DRAFT: written from your notes; nothing added that you didn't tell me.
export const about = [
  "I'm a project engineer at Dimension Consultants, working in the marine and offshore cable lay market. I studied mechanical engineering at IIT Madras (B.Tech, 2024).",
  'Most of my work is converting existing vessels into cable lay vessels and barges. On these projects I do the hull structural analysis and naval architecture studies, and I design the cable lay equipment and check its structure. I supported the project management and class approval for two conversion studies: GL2030, and SFE Adventurer (now DC Eltron).',
  'I also manage packages and work on site. I was lead package manager for the ANMA submarine cable transport and installation (T&I) project. I have supported the installation of cable lay equipment on site, and for a short time I was a field engineer on the TPC II power cable project in Taiwan, working on wind turbine cable pull-ins.',
  'I also write software, mostly in Python, and work with LLM coding agents such as Claude Code and Codex. Outside engineering, I do game design and video editing.',
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
    role: 'Project Engineer',
    company: 'Dimension Consultants',
    // DRAFT: from your notes.
    summary:
      'Vessel conversions to cable lay vessels and barges: hull structural analysis, naval architecture studies, and design and structural analysis of cable lay equipment. Supported project management and class approval for two conversion studies (GL2030; SFE Adventurer, now DC Eltron). Lead package manager for the ANMA submarine cable transport and installation (T&I) project. Supported cable lay equipment installation on site, and worked as a field engineer on wind turbine cable pull-ins for the TPC II project in Taiwan.',
    skills: ['Hull structural analysis', 'Naval architecture', 'Equipment design', 'Class approval', 'Package management', 'Field engineering'],
  },
];

// Education, newest first. The first one also appears on the home page.
export const education: { dates: string; degree: string; school: string; note?: string }[] = [
  { dates: '2020 – 2024', degree: 'B.Tech in Mechanical Engineering', school: 'Indian Institute of Technology Madras' },
];

// Skills, grouped. Keep each list short and honest.
export const skills: { group: string; items: string[] }[] = [
  { group: 'CAD', items: ['SolidWorks', 'Solid Edge', 'AutoCAD'] },
  { group: 'Analysis', items: ['FEMAP', 'OrcaFlex'] },
  { group: 'Naval architecture', items: ['GHS', 'MARS'] },
  { group: 'Code and AI', items: ['Python', 'Claude Code', 'Codex', 'Agentic engineering with LLMs'] },
  { group: 'Other', items: ['Blender', 'DaVinci Resolve', 'Game design', 'Video editing'] },
];
