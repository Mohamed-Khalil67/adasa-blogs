import { Component, input, output } from '@angular/core';
import { Category } from '../../../../data/models';

const CHIP = 'cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300';
const CHIP_ACTIVE = `${CHIP} bg-linear-to-r from-orange-500 to-orange-600 text-white`;
const CHIP_IDLE = `${CHIP} border border-line bg-card text-neutral-400 hover:border-orange-500/30`;

/** Category chips; `null` means "all posts". */
@Component({
  selector: 'app-category-filter',
  template: `
    <div class="flex flex-wrap justify-center gap-2" role="group" aria-label="تصفية حسب التصنيف">
      <button
        type="button"
        [class]="!selected() ? active : idle"
        [attr.aria-pressed]="!selected()"
        (click)="select(null)"
      >
        جميع المقالات
      </button>
      @for (category of categories(); track category.name) {
        <button
          type="button"
          [class]="selected() === category.name ? active : idle"
          [attr.aria-pressed]="selected() === category.name"
          (click)="select(category.name)"
        >
          {{ category.name }}
        </button>
      }
    </div>
  `,
})
export class CategoryFilter {
  readonly categories = input.required<readonly Category[]>();
  readonly selected = input<string | null>(null);
  readonly selectedChange = output<string | null>();

  protected readonly active = CHIP_ACTIVE;
  protected readonly idle = CHIP_IDLE;

  protected select(name: string | null): void {
    if (name !== this.selected()) this.selectedChange.emit(name);
  }
}
