import { describe, expect, it } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
  it('formats a date as "Mon D, YYYY"', () => {
    expect(formatDate(new Date(2026, 8, 29))).toBe('Sep 29, 2026');
  });
});
