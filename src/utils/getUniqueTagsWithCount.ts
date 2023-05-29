import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

export default function getUniqueTags(posts: CollectionEntry<"blog">[] = []): {
  [key: string]: number;
} {
  return posts.reduce((prev, post) => {
    const runningTags: { [key: string]: number } = { ...prev };
    post.data.tags.forEach(tag => {
      runningTags[tag] = (runningTags[tag] || 0) + 1;
    });
    return runningTags;
  }, {});
}
