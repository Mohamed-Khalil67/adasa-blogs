import { Component, ElementRef, computed, inject, input, signal, viewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostLayout } from '../../data/models';
import { filterPosts, isCategory } from '../../data/posts';
import { CATEGORIES, POSTS_PER_PAGE } from '../../data/site';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { PostCard } from '../../shared/components/post-card/post-card';
import { Pagination } from '../../shared/components/pagination/pagination';
import { CategoryFilter } from './components/category-filter/category-filter';
import { ResultsBar } from './components/results-bar/results-bar';
import { SearchBox } from './components/search-box/search-box';

@Component({
  selector: 'app-blog',
  imports: [PageHero, SearchBox, CategoryFilter, ResultsBar, PostCard, Pagination, EmptyState],
  templateUrl: './blog.html',
})
export class Blog {
  /** `?category=` and `?page=`, bound through withComponentInputBinding(). */
  readonly category = input<string>();
  readonly page = input<string>();

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly resultsTop = viewChild<ElementRef<HTMLElement>>('resultsTop');

  protected readonly categories = CATEGORIES;
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

  protected onCategoryChange(category: string | null): void {
    this.updateQuery({ category, page: null });
  }

  protected onSearchChange(term: string): void {
    this.search.set(term);
    if (this.page()) this.updateQuery({ page: null }, true);
  }

  protected onPageChange(page: number): void {
    this.updateQuery({ page: page > 1 ? page : null });
    this.resultsTop()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
