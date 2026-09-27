/**
 * Formats a number with sensible decimal precision, stripping unnecessary trailing zeros.
 * Avoids JavaScript floating point inaccuracies (e.g., 0.1 + 0.2 = 0.30000000000000004).
 */
export function formatResultNumber(val: number, maxDecimals: number = 4): string {
  if (isNaN(val) || !isFinite(val)) return '0';
  
  // For very small numbers (near zero)
  if (Math.abs(val) > 0 && Math.abs(val) < 0.0001) {
    return val.toExponential(4);
  }

  // Round accurately to maxDecimals
  const factor = Math.pow(10, maxDecimals);
  const rounded = Math.round((val + Number.EPSILON) * factor) / factor;
  
  // Format as string without trailing zeros
  const str = rounded.toLocaleString('en-US', {
    maximumFractionDigits: maxDecimals,
    useGrouping: true,
  });

  return str;
}

/**
 * Parses user input string into a number, safely handling commas, spaces, and edge cases.
 */
export function parseInputNumber(raw: string): number | null {
  if (!raw) return null;
  const sanitized = raw.trim().replace(/,/g, '');
  if (sanitized === '' || sanitized === '-' || sanitized === '.') return null;
  const num = Number(sanitized);
  return isNaN(num) ? null : num;
}
