import { CollectionEntry, getCollection } from "astro:content";

export const getSortedProjects = async (): Promise<
  CollectionEntry<"project">[]
> =>
  (await getCollection("project"))?.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

