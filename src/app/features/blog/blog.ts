import { Component, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import POSTS from '../../data/posts.json';
import { PostCard } from '../../shared/post-card/post-card';

const POSTS_PER_PAGE = 6;
const CHIP = 'cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300';

@Component({
  selector: 'app-blog',
  imports: [PostCard, RouterLink],
  templateUrl: './blog.html',
})
export class Blog {
  /** `?category=` and `?page=`, bound through withComponentInputBinding(). */
  readonly category = input<string>();
  readonly page = input<string>();

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly chipActive = `${CHIP} bg-linear-to-r from-orange-500 to-orange-600 text-white`;
  protected readonly chipIdle = `${CHIP} border border-line bg-card text-neutral-400 hover:border-orange-500/30`;

  protected readonly search = signal('');

  /** Search matches the title and excerpt, like the original site. */
  protected readonly filteredPosts = computed(() => {
    const category = this.category();
    const term = this.search().trim().toLowerCase();
    return POSTS.filter(
      (post) =>
        (!category || post.category === category) &&
        (!term ||
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term)),
    );
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

  /** Empties the search box and drops '?category=' and '?page=' from the URL. */
  protected resetFilters(): void {
    this.search.set('');
    void this.router.navigate([], { relativeTo: this.route });
  }
}
