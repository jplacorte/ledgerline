import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { screenKinds, navSets, setup } from './data/mock';

const testimonial = z.object({
  quote: z.string(),
  name: z.string(),
  role: z.string().optional(),
  tag: z.string().optional(),
});

/** A generated mock product screen (see components/MockScreen.astro). */
const screen = z.object({
  kind: z.enum(screenKinds),
  app: z.enum(Object.keys(navSets) as [string, ...string[]]).optional(),
  preset: z.enum(Object.keys(setup) as [string, ...string[]]).optional(),
  label: z.string().optional(),
});

const faq = z.object({ q: z.string(), a: z.string() });

const products = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/products' }),
  schema: () =>
    z.object({
      name: z.string(),
      order: z.number(),
      hue: z.string(),
      category: z.string(),
      forWho: z.string(),
      headline: z.string(),
      summary: z.string(),
      seo: z.object({ title: z.string(), description: z.string() }),
      hero: z.object({
        screen,
        alt: z.string().optional(),
        caption: z.string(),
      }),
      fromPrice: z.string(),
      priceNote: z.string(),
      secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })),
      proof: z.object({
        heading: z.string(),
        testimonials: z.array(testimonial),
      }),
      problem: z.object({
        eyebrow: z.string(),
        heading: z.string(),
        body: z.array(z.string()),
        compare: z.object({ without: z.array(z.string()), with: z.array(z.string()) }).optional(),
        quote: testimonial.optional(),
      }),
      capabilities: z.object({
        eyebrow: z.string(),
        heading: z.string(),
        intro: z.string(),
        items: z.array(
          z.object({
            kicker: z.string(),
            title: z.string(),
            body: z.array(z.string()),
            bullets: z.array(z.string()).optional(),
            figure: z.object({ value: z.string(), label: z.string() }).optional(),
            screen: screen.optional(),
            alt: z.string().optional(),
            caption: z.string().optional(),
          }),
        ),
      }),
      steps: z
        .object({
          eyebrow: z.string(),
          heading: z.string(),
          intro: z.string().optional(),
          items: z.array(
            z.object({ title: z.string(), body: z.string(), points: z.array(z.string()).optional() }),
          ),
        })
        .optional(),
      questions: z.object({ heading: z.string(), intro: z.string(), items: z.array(z.string()) }).optional(),
      audience: z.object({
        eyebrow: z.string(),
        heading: z.string(),
        intro: z.string().optional(),
        items: z.array(z.object({ title: z.string(), body: z.string() })),
        note: z.object({ title: z.string(), body: z.string(), href: z.string(), label: z.string() }).optional(),
      }),
      pricing: z.object({
        heading: z.string(),
        intro: z.string(),
        plans: z.array(
          z.object({
            name: z.string(),
            price: z.string(),
            period: z.string().optional(),
            description: z.string(),
            features: z.array(z.string()),
            renewal: z.string().optional(),
            featured: z.boolean().default(false),
            cta: z.enum(['buy', 'quote']).default('buy'),
          }),
        ),
        includes: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
        guarantee: z.string(),
      }),
      sample: z.object({ title: z.string(), body: z.string() }).optional(),
      faqs: z.array(faq),
      closing: z.object({ heading: z.string(), body: z.string() }),
      related: z.array(reference('products')).default([]),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.string(),
      product: reference('products').optional(),
      readingMinutes: z.number(),
      cover: image(),
      coverAlt: z.string(),
      author: z.string().default('Ledgerline Team'),
      draft: z.boolean().default(false),
    }),
});

const faqs = defineCollection({
  loader: file('./src/content/faqs.yaml'),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['general', 'product']),
    order: z.number(),
    items: z.array(faq),
  }),
});

export const collections = { products, posts, faqs };
