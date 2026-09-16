export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export interface Category {
  name: string;
  icon: string;
}

export interface CategorySummary extends Category {
  count: number;
}

export type PostLayout = 'grid' | 'list';

export interface ContentBlock {
  type: 'heading' | 'paragraph';
  text: string;
  /** Anchor id, only set for headings. */
  id?: string;
}

export interface TocItem {
  id: string;
  title: string;
}

export interface ParsedContent {
  blocks: ContentBlock[];
  toc: TocItem[];
}
