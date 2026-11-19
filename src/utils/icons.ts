import {
  siCplusplus,
  siDocker,
  siExpress,
  siFastapi,
  siFirebase,
  siGit,
  siGithubactions,
  siGitlab,
  siHtml5,
  siJavascript,
  siLangchain,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siPython,
  siRabbitmq,
  siReact,
  siRedis,
  siSqlalchemy,
  siTailwindcss,
  siTypescript,
  siVite,
  type SimpleIcon,
} from 'simple-icons';

// Skill label (as written in SKILLS) -> Simple Icons logo. Skills without a logo
// (e.g. Microservices, BullMQ) are simply shown as plain text chips.
const ICONS: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  'C/C++': siCplusplus,
  React: siReact,
  Vite: siVite,
  'Next.js': siNextdotjs,
  'HTML/CSS': siHtml5,
  'Tailwind CSS': siTailwindcss,
  'Node.js': siNodedotjs,
  NestJS: siNestjs,
  Express: siExpress,
  FastAPI: siFastapi,
  LangChain: siLangchain,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Firebase: siFirebase,
  Redis: siRedis,
  Prisma: siPrisma,
  SQLAlchemy: siSqlalchemy,
  Git: siGit,
  'GitHub Actions': siGithubactions,
  GitLab: siGitlab,
  Postman: siPostman,
  Docker: siDocker,
  RabbitMQ: siRabbitmq,
};

// Relative luminance (0 = black, 1 = white) of a 6-digit hex color
function luminance(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getSkillIcon(label: string) {
  const icon = ICONS[label];
  if (!icon) return null;
  // Very dark brand colors (Next.js, Express...) would vanish in dark mode,
  // so those use the surrounding text color instead.
  return { path: icon.path, color: luminance(icon.hex) < 0.08 ? null : `#${icon.hex}` };
}
