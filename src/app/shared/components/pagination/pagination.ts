import { Component, computed, input, output } from '@angular/core';

type PageItem = number | 'gap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
})
export class Pagination {
  readonly current = input.required<number>();
  readonly total = input.required<number>();
  readonly pageChange = output<number>();

  /** Up to 5 pages are shown in full; otherwise gaps collapse the middle. */
  protected readonly pages = computed<PageItem[]>(() => {
    const current = this.current();
    const total = this.total();

    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, 'gap', total];
    if (current >= total - 2) return [1, 'gap', total - 3, total - 2, total - 1, total];
    return [1, 'gap', current - 1, current, current + 1, 'gap', total];
  });

  protected goTo(page: number): void {
    if (page >= 1 && page <= this.total() && page !== this.current()) {
      this.pageChange.emit(page);
    }
  }
}
