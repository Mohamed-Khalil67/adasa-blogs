import { Component, ElementRef, afterRenderEffect, inject, input, output, viewChild } from '@angular/core';
import { SearchFocusService } from '../../../../shared/services/search-focus.service';

@Component({
  selector: 'app-search-box',
  template: `
    <div class="relative w-full">
      <label for="blog-search" class="sr-only">ابحث في المقالات</label>
      <input
        #searchInput
        id="blog-search"
        type="text"
        autocomplete="off"
        placeholder="ابحث في المقالات..."
        class="input-dark py-3 pr-12"
        [value]="value()"
        (input)="valueChange.emit(searchInput.value)"
      />
      <i
        class="fa-solid fa-magnifying-glass pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-lg text-neutral-500"
      ></i>
    </div>
  `,
})
export class SearchBox {
  readonly value = input('');
  readonly valueChange = output<string>();

  private readonly inputRef = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');
  private readonly searchFocus = inject(SearchFocusService);

  constructor() {
    // Focus when the header search button asked for it.
    afterRenderEffect(() => {
      if (!this.searchFocus.pending()) return;
      this.inputRef().nativeElement.focus();
      this.searchFocus.consume();
    });
  }
}
