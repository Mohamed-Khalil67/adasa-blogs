import postsJson from './posts.json';
import { Author, CategorySummary, ContentBlock, ParsedContent, Post } from './models';
import { CATEGORIES } from './site';

// Import this file only from lazy-loaded pages (or with a dynamic import), so the
// article text stays out of the initial bundle.

export const POSTS = postsJson as Post[];

export const FEATURED_POSTS = POSTS.filter((post) => post.featured);
export const LATEST_POSTS = POSTS.filter((post) => !post.featured).slice(0, 3);

/** Unique authors, in order of first appearance. */
export const AUTHORS: Author[] = [...new Map(POSTS.map((post) => [post.author.name, post.author])).values()];

/** Counted from the posts: the counts in the original JSON were out of date. */
export const CATEGORY_SUMMARIES: CategorySummary[] = CATEGORIES.map((category) => ({
  ...category,
  count: POSTS.filter((post) => post.category === category.name).length,
}));

export function findPost(slug: string | null | undefined): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function isCategory(name: string | null | undefined): boolean {
  return CATEGORIES.some((category) => category.name === name);
}

/** Same category first, then topped up with other posts. */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const related = POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, limit);
  const fillers = POSTS.filter((p) => p.id !== post.id && !related.includes(p));
  return [...related, ...fillers].slice(0, limit);
}

/** Search matches the title and excerpt, like the original site. */
export function filterPosts(category: string | null, search: string): Post[] {
  const term = search.trim().toLowerCase();
  return POSTS.filter(
    (post) =>
      (!category || post.category === category) &&
      (!term || post.title.toLowerCase().includes(term) || post.excerpt.toLowerCase().includes(term)),
  );
}

/**
 * Splits a post body into paragraphs and "## " headings and builds the table of
 * contents. Heading ids follow the original site: section-0, section-1…
 */
export function parsePostContent(content: string): ParsedContent {
  const blocks: ContentBlock[] = [];
  let headingIndex = 0;

  for (const chunk of content.split('\n\n')) {
    const text = chunk.trim();
    if (!text) continue;

    if (text.startsWith('## ')) {
      blocks.push({ type: 'heading', text: text.slice(3), id: `section-${headingIndex++}` });
    } else {
      blocks.push({ type: 'paragraph', text });
    }
  }

  const toc = blocks.filter((b) => b.type === 'heading').map((b) => ({ id: b.id!, title: b.text }));
  return { blocks, toc };
}
