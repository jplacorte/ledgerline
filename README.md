# Ledgerline

A showcase site for **Ledgerline**, a fictional financial-software company, built with Astro 7. It started as a redesign of a WordPress theme. Every company name, person, testimonial, figure, phone number, and domain on the site is dummy data, and the footer says so.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run check     # astro check (types + templates)
npm run og        # regenerate public/og.png
```

## Design: "Ledger"

An editorial, annual-report look for financial professionals:

- **Paper and ink.** Warm paper (`--paper`), deep ink navy (`--ink`), hairline rules, and the MoneySoft signal orange used sparingly.
- **Three typefaces.** Newsreader for display serif, Geist for UI and body, and Geist Mono for figures, labels, and tabular numbers. They load through Astro's Fonts API and are self-hosted at build time.
- **Product hues.** Each product has a hue (`--p-fap`, `--p-ds`, `--p-bvs`, `--p-bp`) that tints its marks, kickers, and accents through `--hue`.
- **Generated product screens.** The product "screenshots" are HTML mock-ups (`MockScreen.astro`) filled with sample data from `src/data/mock.ts`. They scale like images and pick up each product's hue. There are no stock photos or real screenshots.
- **No JS framework.** The site ships two small scripts: the header menu and form enhancement. Reveal effects use CSS scroll-driven animations, and page transitions use CSS cross-document view transitions. Both respect `prefers-reduced-motion`.

All tokens live in `src/styles/global.css` (cascade layers: reset → tokens → base → layout → components → utilities).

## Structure

```
src/
  content.config.ts          # Zod-validated collections: products, posts, faqs
  content/
    products/*.yaml          # one file per product → /[product]/ pages
    posts/*.md               # articles → /articles/[slug]/
    faqs.yaml                # grouped FAQs → /faqs/
  data/site.ts               # phone, email, nav, stats, buyHref(), form endpoint
  layouts/BaseLayout.astro   # <head>, SEO/OG, JSON-LD, fonts, header/footer
  components/                # Header, Footer, SectionHeader, ScreenPlate, PricingCard, FaqList, CtaBand…
  pages/
    index.astro              # home
    [product].astro          # Fixed Asset Pro, DealSense, BVS, Benchmark Pro (from YAML)
    done-deals.astro, data-offerings.astro, pricing.astro
    about.astro, customers.astro, contact.astro, book-a-demo.astro, faqs.astro
    articles/index.astro, articles/[slug].astro
    thank-you.astro, 404.astro
```

To add a product, add a YAML file in `src/content/products/`. The schema in `content.config.ts` validates it at build time, so a missing field or wrong type fails the build.

## SEO

- Canonical URLs, Open Graph and Twitter tags, `sitemap-index.xml`, and `robots.txt`.
- JSON-LD types: Organization (every page), SoftwareApplication with Offers (product pages), FAQPage, BreadcrumbList, and Article.

## Dummy data

- **Company and contact details** live in `src/data/site.ts`: founded 2008, Denver CO, phone 800-555-0142, `@ledgerline.example` emails, and the footer `demoNotice`. Numbers in the 555-01xx range and `.example` domains are reserved for fictional use.
- **Products** (Ledgerline Assets, Deals, Valuation, Benchmark) live in `src/content/products/*.yaml`. Their testimonials use fictional people.
- **Data products** (Deal Index, Peer Ratio Studies, Main Street Comps, Industry Outlook Reports) are fictional too.
- **Mock screen data** (Harbor & Pine Manufacturing, assets, deals, ratios) lives in `src/data/mock.ts`.
- **Forms** run in demo mode unless `PUBLIC_FORM_ENDPOINT` is set. They validate, then redirect to `/thank-you/` without sending anything.
- **Site URL** is `https://ledgerline.example` in `astro.config.mjs`. Change it to wherever you host the showcase so canonical URLs and the sitemap match.
