import { describe, expect, it } from 'vitest';
import { EDUCATION, EXPERIENCE, NAV_LINKS, SITE, SOCIALS } from './consts';

describe('site constants', () => {
  it('has a valid contact email', () => {
    expect(SITE.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('uses absolute https URLs for social links', () => {
    for (const { href } of SOCIALS) {
      expect(new URL(href).protocol).toBe('https:');
    }
  });

  it('uses root-relative paths for nav links', () => {
    for (const { href } of NAV_LINKS) {
      expect(href.startsWith('/')).toBe(true);
    }
  });

  it('lists at least one highlight for every job', () => {
    expect(EXPERIENCE.length).toBeGreaterThan(0);
    for (const job of EXPERIENCE) {
      expect(job.highlights.length).toBeGreaterThan(0);
    }
  });

  it('lists education entries', () => {
    expect(EDUCATION.length).toBeGreaterThan(0);
  });
});
