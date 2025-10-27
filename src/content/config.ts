import { defineCollection, z } from 'astro:content';

const calc2Collection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate:z.date(),
    draft: z.boolean(),
    author: z.string(),
  }),
});

const discreteStructures1Collection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate:z.date(),
    draft: z.boolean(),
    author: z.string()
  }),
});


const aiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate:z.date(),
    draft: z.boolean(),
    author: z.string()
  }),
});

const discreteStructures2Collection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate:z.date(),
    draft: z.boolean(),
    author: z.string()
  }),
});


export const collections = {
  calc2: calc2Collection,
  discreteStructures1: discreteStructures1Collection,
  ai: aiCollection,
  discreteStructures2:discreteStructures2Collection,

};