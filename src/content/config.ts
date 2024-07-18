import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

// const blog = defineCollection({
//   schema: rssSchema,
// });

const projectsCollection = defineCollection({
  schema: rssSchema,
});

export const collections = { project: projectsCollection };