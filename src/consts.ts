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
  Languages: ['TypeScript', 'JavaScript', 'Python'],
  Frontend: ['React', 'Vite', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'LangChain'],
  Database: ['MySQL', 'PostgreSQL', 'Redis'],
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
      'Shipped 8 features for an internal employee portal (React, TypeScript, Redux Toolkit) and built 10+ reusable hooks, components and utilities across the news, events and admin modules.',
      'Cut the initial JS payload by ~61% (2.0 MB → 778 KB) with route-level code splitting, vendor chunking and on-demand locale loading.',
      'Migrated 35 REST endpoints across 30 files from API v1 to v2 using Orval-generated TypeScript clients, and set up 3 CI/CD pipelines.',
      'Wrote Vitest unit tests for Redux thunks, time-dependent logic and a single-flight token-refresh interceptor, and fixed a race condition in the SSO logout flow.',
      'Worked in a 5-person Scrum team across 13 sprints, and applied a Claude-based SDLC workflow (Figma and Jira via MCP, planner/implementer/reviewer agents).',
    ],
  },
  {
    company: 'Kenix Solution',
    role: 'Full-stack Developer · Remote',
    period: 'Oct 2025 – Mar 2026',
    highlights: [
      'Built NestJS + Prisma backends for two client products, a sports booking platform (Smash Club) and an online pharmacy (Nam Nhi Pharmacity), plus their Next.js frontends.',
      'Cut booking-search median latency 16× (109 → 7 ms) with a single dynamic Prisma query, and eliminated an N+1 query and an overbooking race condition (transaction + pessimistic locking).',
      'Built event-driven notifications with RabbitMQ (durable queue, manual ack/nack) and queue-based email on Redis/BullMQ, keeping SMTP latency off API responses.',
      'Implemented JWT authentication with rotating refresh tokens and reuse detection, deployed to dev and UAT over SSH, and fixed 5 production bugs in a Scrum/GitLab workflow.',
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
