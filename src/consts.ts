// Global site info — edit these to make the portfolio yours.

export const SITE = {
  name: 'Nguyen Kim Tran',
  initials: 'NKT',
  role: 'Software Engineer',
  title: 'Nguyen Kim Tran — Software Engineer',
  description:
    'Software Engineer in Ho Chi Minh City building production TypeScript applications with React, Next.js and NestJS.',
  email: 'trannguyenkim214@gmail.com',
  // PDF in /public; replace the file to update the download
  cv: '/Nguyen-Kim-Tran-CV.pdf',
  location: 'Ho Chi Minh City, Vietnam',
  // Shows the green "Open to work" badge in the hero
  openToWork: true,
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/kimmich04' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trannguyenkim214' },
];

export const NAV_LINKS = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'C/C++'],
  Frontend: ['React', 'Vite', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'LangChain'],
  Database: ['MySQL', 'PostgreSQL', 'Firebase', 'Redis'],
  'ORM & Migration': ['Prisma', 'SQLAlchemy', 'Alembic'],
  'DevOps & Tools': ['Git', 'GitHub Actions', 'GitLab', 'Postman', 'Docker'],
  'Architecture & Messaging': ['Microservices', 'RabbitMQ', 'BullMQ', 'Webhooks'],
  'Spoken languages': ['English (IELTS 6.0)', 'German (A2)'],
};

export const EXPERIENCE = [
  {
    company: 'Bosch Global Software Technologies Vietnam',
    role: 'Frontend Developer Intern',
    period: 'Apr 2026 – Sep 2026',
    highlights: [
      'Built a shared component library with 4 themes and Light/Dark/System mode, published as a private package and adopted by 5 applications.',
      'Raised web performance scores (LCP, FID, CLS, TTFB) from under 50 to 80+ with route-based code splitting, vendor chunking and lazy-loaded translations (~200 KB off the initial load).',
      'Migrated i18n for 10 languages (~730 keys each) from an Azure API to bundled files, and moved 6 Redux slices to v2 API clients generated from OpenAPI specs.',
      'Set up 3 CI/CD pipelines and shipped changes across 13 sprints in a 5-person Scrum team.',
    ],
  },
  {
    company: 'Kenix Solution',
    role: 'Full-stack Developer · Remote',
    period: 'Oct 2025 – Mar 2026',
    highlights: [
      'Built NestJS + Prisma backends for three client products: a sport booking platform, an online pharmacy and a Zalo follower-tracking service.',
      'Implemented JWT authentication with rotating refresh tokens and reuse detection, plus queue-based email with RabbitMQ and Redis/BullMQ.',
      'Replaced ~470 lines of in-memory filtering with a single paginated Prisma query.',
      'Fixed 6 production bugs across frontend and backend; 15 commits reached the production branch.',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'Vietnamese-German University (VGU)',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Sep 2022 – Dec 2026',
    notes: [
      'Merit Scholarship; DAAD Study-Stay Scholarship in Germany',
      'Coursework: Software Engineering, Algorithms and Data Structures, IT Security, Cloud (AWS), Mobile (Kotlin)',
    ],
  },
  {
    school: 'Frankfurt University of Applied Sciences (FRAUAS)',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Oct 2024 – Mar 2025',
    notes: ['Coursework: Software Engineering, Databases, Operating Systems, OOP, Computer Networks'],
  },
];
