const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Render a content string with `*emphasis*` as HTML-safe markup. */
export const emph = (s: string) => escapeHtml(s).replace(/\*(.+?)\*/g, '<em>$1</em>');

/** Strip `*emphasis*` markers for plain-text contexts (titles, alt, meta). */
export const plain = (s: string) => s.replace(/\*(.+?)\*/g, '$1');

export const formatMonth = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const initials = (name: string) =>
  name
    .split(/[\s,]+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
