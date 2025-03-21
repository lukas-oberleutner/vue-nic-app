// formatDate.spec.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from '@/utils/date.ts';

describe('formatDate', () => {
  it('should return "N/A" for null or undefined dateString', () => {
    expect(formatDate(null)).toBe('N/A');
    expect(formatDate(undefined)).toBe('N/A');
  });

  it('should return "Invalid date" for an invalid dateString', () => {
    expect(formatDate('invalid-date')).toBe('Invalid date');
    expect(formatDate('2023-13-01T12:00:00Z')).toBe('Invalid date');
  });

  it('should format a valid dateString correctly', () => {
    const dateString = '2023-10-27T10:30:45Z';
    const formattedDate = formatDate(dateString);
    // Zde bude výsledek záviset na lokálním prostředí, ale obecně by měl vypadat takto:
    expect(formattedDate).toMatch(/Oct 27, 2023, 10:30:45 AM/);
  });

  it('should handle different valid date strings', () => {
    const date1 = '2024-01-01T00:00:00Z';
    const date2 = '2023-12-25T12:30:00Z';
    const date3 = '1999-07-15T18:45:15Z';

    expect(formatDate(date1)).toMatch(/Jan 1, 2024, 12:00:00 AM/);
    expect(formatDate(date2)).toMatch(/Dec 25, 2023, 12:30:00 PM/);
    expect(formatDate(date3)).toMatch(/Jul 15, 1999, 6:45:15 PM/);
  });
});
