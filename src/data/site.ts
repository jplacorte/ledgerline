export const site = {
  name: 'Ledgerline',
  tagline: 'Own the Numbers. Create Value.',
  description:
    'Desktop financial software for CFOs, controllers, CPAs, valuators, and M&A professionals — fixed asset accounting, business valuation, M&A analysis, and financial statement benchmarking.',
  // Everything below is dummy data for a fictional company (555-01xx numbers and .example domains are reserved for fiction).
  founded: 2008,
  phone: '800-555-0142',
  phoneHref: 'tel:+18005550142',
  email: { support: 'support@ledgerline.example', sales: 'sales@ledgerline.example' },
  location: 'Denver, Colorado',
  hours: 'Mon–Fri, 8:00 AM – 5:00 PM Mountain Time',
  stats: {
    rating: '4.8',
    reviews: '300+',
    renewal: '92%',
    years: new Date().getFullYear() - 2008,
  },
  /** Shown in the footer so visitors know the company and data are fictional. */
  demoNotice: 'Ledgerline is a fictional company. All names, figures, and testimonials on this site are sample data.',
  /**
   * Where form submissions are POSTed (Formspree, Netlify Forms, a CRM webhook…).
   * Leave unset to run the forms in demo mode (they redirect to /thank-you/ without sending).
   */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined,
} as const;

export type NavLink = { label: string; href: string; description?: string };

export const nav = {
  products: [
    { label: 'Ledgerline Assets', href: '/fixed-assets/', description: 'Fixed asset accounting & depreciation' },
    { label: 'Ledgerline Deals', href: '/deals/', description: 'M&A planning & acquisition analysis' },
    { label: 'Ledgerline Valuation', href: '/valuation/', description: 'Standards-based valuation & reports' },
    { label: 'Ledgerline Benchmark', href: '/benchmark/', description: 'Financial statement analysis' },
  ],
  data: [
    { label: 'Deal Index', href: '/deal-index/', description: 'Mid-market M&A transactions' },
    { label: 'Data Offerings', href: '/data-offerings/', description: 'Benchmarks, comps & industry reports' },
  ],
  main: [
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Customers', href: '/customers/' },
    { label: 'Articles', href: '/articles/' },
    { label: 'About', href: '/about/' },
  ],
  footer: {
    Company: [
      { label: 'About', href: '/about/' },
      { label: 'Customers', href: '/customers/' },
      { label: 'Articles', href: '/articles/' },
      { label: 'Contact', href: '/contact/' },
    ],
    Support: [
      { label: 'FAQs', href: '/faqs/' },
      { label: 'Book a demo', href: '/book-a-demo/' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Contact support', href: '/contact/?reason=support' },
    ],
  },
} satisfies Record<string, unknown>;

/** Where a "Buy" button sends people. Point this at the real checkout when it exists. */
export const buyHref = (productSlug: string) => `/contact/?reason=sales&product=${productSlug}`;
