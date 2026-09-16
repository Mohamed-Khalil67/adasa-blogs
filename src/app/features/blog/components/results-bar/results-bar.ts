import { Component, input, output } from '@angular/core';
import { PostLayout } from '../../../../data/models';
import { ViewToggle } from '../view-toggle/view-toggle';

@Component({
  selector: 'app-results-bar',
  imports: [ViewToggle],
  template: `
    <div class="mb-8 flex items-center justify-between">
      <p class="text-neutral-400" aria-live="polite">
        عرض <span class="font-bold text-white">{{ count() }}</span>
        {{ count() === 1 ? 'مقالة' : 'مقالات' }}
      </p>
      <div class="flex items-center gap-2">
        <app-view-toggle [layout]="layout()" (layoutChange)="layoutChange.emit($event)" />
        @if (hasFilters()) {
          <button
            type="button"
            (click)="clear.emit()"
            class="flex cursor-pointer items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-orange-500"
          >
            <i class="fa-solid fa-xmark"></i>
            مسح الفلاتر
          </button>
        }
      </div>
    </div>
  `,
})
export class ResultsBar {
  readonly count = input.required<number>();
  readonly hasFilters = input(false);
  readonly layout = input.required<PostLayout>();
  readonly layoutChange = output<PostLayout>();
  readonly clear = output<void>();
}
