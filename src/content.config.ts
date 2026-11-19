import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Where the project happened (employer, hackathon, university) and your part in it
    company: z.string().optional(),
    role: z.string().optional(),
    period: z.string(),
    // Small label on the card, e.g. "Hackathon" or "Thesis"
    badge: z.string().optional(),
    // Lower numbers are listed first
    order: z.number().default(99),
    tech: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    // Any other links, shown after Code/Live (e.g. a chatbot deeplink)
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
