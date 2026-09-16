import { Component, input } from '@angular/core';

/**
 * Category pill in three styles:
 * - glass: dark translucent (on post card images)
 * - soft: pale orange (next to post text)
 * - solid: orange (on related post images)
 */
@Component({
  selector: 'app-category-badge',
  template: `
    @switch (variant()) {
      @case ('glass') {
        <span
          class="inline-block rounded-full border border-line-strong bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
        >
          {{ name() }}
        </span>
      }
      @case ('soft') {
        <span
          class="inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500"
        >
          {{ name() }}
        </span>
      }
      @default {
        <span class="inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
          {{ name() }}
        </span>
      }
    }
  `,
})
export class CategoryBadge {
  readonly name = input.required<string>();
  readonly variant = input<'glass' | 'soft' | 'solid'>('glass');
}
