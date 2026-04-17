import { defineCollection, z } from 'astro:content';

const villages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cluster: z.string(),
    region: z.string(),
    villages: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { villages, blog };
