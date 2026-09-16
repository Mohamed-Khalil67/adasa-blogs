import { Component, ElementRef, afterRenderEffect, computed, inject, input, signal, viewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostLayout } from '../../data/models';
import { CATEGORIES, POSTS_PER_PAGE, filterPosts, isCategory } from '../../data/posts';
import { Pagination } from '../../shared/components/pagination/pagination';
import { PostCard } from '../../shared/components/post-card/post-card';
import { SearchFocusService } from '../../shared/services/search-focus.service';

const CHIP = 'cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300';

@Component({
  selector: 'app-blog',
  imports: [PostCard, Pagination],
  templateUrl: './blog.html',
})
export class Blog {
  /** `?category=` and `?page=`, bound through withComponentInputBinding(). */
  readonly category = input<string>();
  readonly page = input<string>();

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly searchFocus = inject(SearchFocusService);
  private readonly searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');
  private readonly resultsTop = viewChild.required<ElementRef<HTMLElement>>('resultsTop');

  protected readonly categories = CATEGORIES;
  protected readonly chipActive = `${CHIP} bg-linear-to-r from-orange-500 to-orange-600 text-white`;
  protected readonly chipIdle = `${CHIP} border border-line bg-card text-neutral-400 hover:border-orange-500/30`;

  protected readonly search = signal('');
  protected readonly layout = signal<PostLayout>('grid');

  /** An unknown category in the URL falls back to "all posts". */
  protected readonly activeCategory = computed(() => {
    const category = this.category();
    return isCategory(category) ? category! : null;
  });

  protected readonly filteredPosts = computed(() => filterPosts(this.activeCategory(), this.search()));

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

  protected readonly hasFilters = computed(() => !!this.activeCategory() || !!this.search().trim());

  constructor() {
    // Focus the search box when the header search button asked for it.
    afterRenderEffect(() => {
      if (!this.searchFocus.pending()) return;
      this.searchInput().nativeElement.focus();
      this.searchFocus.consume();
    });
  }

  protected selectCategory(category: string | null): void {
    if (category !== this.activeCategory()) this.updateQuery({ category, page: null });
  }

  protected onSearchChange(term: string): void {
    this.search.set(term);
    if (this.page()) this.updateQuery({ page: null }, true);
  }

  protected onPageChange(page: number): void {
    this.updateQuery({ page: page > 1 ? page : null });
    this.resultsTop().nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected resetFilters(): void {
    this.search.set('');
    this.updateQuery({ category: null, page: null });
  }

  private updateQuery(queryParams: Params, replaceUrl = false): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl,
    });
  }
}
