// Global site info — edit these to make the portfolio yours.

export const SITE = {
  name: 'Your Name',
  role: 'Software Engineering Intern',
  title: 'Your Name — Portfolio',
  description: 'Personal portfolio: projects, writing, and ways to get in touch.',
  email: 'you@example.com',
  location: 'City, Country',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
];

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  Frontend: ['Astro', 'React', 'Tailwind CSS', 'HTML/CSS'],
  Backend: ['Node.js', 'Express', 'PostgreSQL'],
  Tools: ['Git', 'Docker', 'VS Code', 'Figma'],
};
