// Renders public/og.png (1200×630) — the default social share image.
// Run with: npm run og
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#e8e3d8" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#f6f4ef"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.7"/>
  <g transform="translate(80 80) scale(0.875)">
    <rect width="64" height="64" rx="14" fill="#0e1a2b"/>
    <rect x="16" y="13" width="7" height="31" rx="1" fill="#f6f4ef"/>
    <rect x="28" y="16" width="20" height="2.5" rx="1.25" fill="#f6f4ef" opacity=".9"/>
    <rect x="28" y="24" width="16" height="2.5" rx="1.25" fill="#f6f4ef" opacity=".65"/>
    <rect x="28" y="32" width="12" height="2.5" rx="1.25" fill="#f6f4ef" opacity=".4"/>
    <rect x="16" y="44" width="32" height="7" rx="1" fill="#e0622a"/>
  </g>
  <text x="152" y="122" font-family="Georgia, serif" font-size="38" fill="#0e1a2b">Ledger<tspan font-style="italic" fill="#b3461a">line</tspan></text>
  <text x="80" y="300" font-family="Georgia, serif" font-size="76" fill="#0e1a2b" letter-spacing="-2">Financial software for</text>
  <text x="80" y="390" font-family="Georgia, serif" font-size="76" fill="#0e1a2b" letter-spacing="-2"><tspan font-style="italic" fill="#b3461a">consequential</tspan> decisions.</text>
  <line x1="80" y1="480" x2="1120" y2="480" stroke="#0e1a2b" stroke-width="1.5"/>
  <text x="80" y="530" font-family="Menlo, monospace" font-size="22" fill="#5b6577" letter-spacing="1">FIXED ASSET PRO · DEALSENSE · BUSINESS VALUATION SPECIALIST · BENCHMARK PRO</text>
  <text x="80" y="566" font-family="Menlo, monospace" font-size="22" fill="#5b6577" letter-spacing="1">OWN THE NUMBERS. CREATE VALUE. · SINCE 1991</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);
console.log('public/og.png written');
