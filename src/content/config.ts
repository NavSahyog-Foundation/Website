import { defineCollection, z } from 'astro:content';

const villages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cluster: z.string().optional(),
    region: z.enum(['Karnataka', 'Tamil Nadu', 'Nagaland']),
    order: z.number().default(0),
    villageNames: z.array(z.string()).optional(),
    summary: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    summary: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    videos: z.array(z.string()).default([]),
  }),
});

export const collections = { villages, events };
