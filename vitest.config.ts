/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// Reuses Astro's Vite setup so tests resolve the same aliases (e.g. `@/`) as the site
export default getViteConfig({
  test: {
    include: ['src/**/*.test.ts'],
  },
});
