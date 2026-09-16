import { Params } from '@angular/router';

// ---- Blog content ----

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

// ---- Site & UI ----

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
}

export interface NavLink {
  label: string;
  path: string;
  queryParams?: Params;
  exact?: boolean;
}

export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface BreadcrumbItem {
  label?: string;
  icon?: string;
  link?: string;
}

// ---- Legal pages ----

export interface LegalListItem {
  /** Optional bold lead-in, e.g. "بيانات الهوية". */
  label?: string;
  text: string;
}

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: LegalListItem[];
  /** Shows the site's contact email under the section. */
  showEmail?: boolean;
}

export interface LegalDocument {
  title: string;
  icon: string;
  updatedAt: string;
  notice: { icon: string; title: string; text: string };
  sections: LegalSection[];
  closing: { text: string; linkLabel: string; link: string };
}
