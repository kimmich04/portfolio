# Portfolio

Personal portfolio built with [Astro](https://astro.build), Tailwind CSS v4, MDX, and [Motion](https://motion.dev).

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build the static site to `./dist/`   |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Type-check `.astro` and `.ts` files  |
| `npm run format`  | Format everything with Prettier      |

## Project structure

```text
src/
├── consts.ts             # Name, role, email, socials, nav links, skills — edit first
├── content.config.ts     # Schemas for the blog and projects collections
├── content/
│   ├── blog/             # Blog posts (.md / .mdx)
│   └── projects/         # Project write-ups (.md / .mdx); `featured: true` shows on home
├── components/           # Header, Footer, ThemeToggle, ProjectCard, PostList, Section
├── layouts/BaseLayout.astro  # <head>, SEO meta, theme script, scroll-reveal animations
├── pages/                # File-based routes: /, /projects, /blog, 404
├── styles/global.css     # Tailwind setup, accent color, dark-mode variant
└── utils/
```

## Customizing

- **Your info**: edit `src/consts.ts`.
- **Deployed URL**: set `site` in `astro.config.mjs` (used for sitemap and canonical links).
- **Accent color / font**: edit the `@theme` block in `src/styles/global.css`.
- **Animations**: add `data-reveal` (and optionally `data-reveal-delay="0.2"`) to any element to fade it in on scroll.

## Deploy

Any static host works: Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Build command `npm run build`, output directory `dist`.
