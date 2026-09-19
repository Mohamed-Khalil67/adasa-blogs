import { Component, computed, input } from '@angular/core';
import { Params, RouterLink, RouterLinkActive } from '@angular/router';
import { CATEGORIES } from '../../data/categories';
import POSTS from '../../data/posts.json';
import { PostCard } from '../../shared/post-card/post-card';

const POSTS_PER_PAGE = 6;

@Component({
  selector: 'app-blog',
  imports: [PostCard, RouterLink, RouterLinkActive],
  templateUrl: './blog.html',
})
export class Blog {
  /** The `/blog/category/:category` param and `?page=`, bound through withComponentInputBinding(). */
  readonly category = input<string>();
  readonly page = input<string>();

  protected readonly categories = CATEGORIES;

  protected readonly filteredPosts = computed(() => {
    const category = this.category();
    return category ? POSTS.filter((post) => post.category === category) : POSTS;
  });

  protected readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredPosts().length / POSTS_PER_PAGE)),
  );

  protected readonly currentPage = computed(() => {
    const page = Math.trunc(Number(this.page())) || 1;
    return Math.min(Math.max(page, 1), this.totalPages());
  });

  protected readonly visiblePosts = computed(() => {
    const start = (this.currentPage() - 1) * POSTS_PER_PAGE;
    return this.filteredPosts().slice(start, start + POSTS_PER_PAGE);
  });

  /** Page buttons: up to 5 pages are shown in full, otherwise gaps collapse the middle. */
  protected readonly pageButtons = computed<(number | 'gap')[]>(() => {
    const current = this.currentPage();
    const total = this.totalPages();

    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, 'gap', total];
    if (current >= total - 2) return [1, 'gap', total - 3, total - 2, total - 1, total];
    return [1, 'gap', current - 1, current, current + 1, 'gap', total];
  });

  /** Page one is the bare URL, so '?page=1' never shows up in a link. */
  protected pageParams(page: number): Params {
    return { page: page > 1 ? page : null };
  }
}
