import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbItem } from '../../../data/models';

/**
 * - glass: translucent pill over the article cover image
 * - plain: centered text trail on the legal pages
 * The last item is the current page and is never a link.
 */
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  template: `
    <nav
      aria-label="مسار التنقل"
      [class]="
        variant() === 'glass'
          ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md'
          : 'flex items-center justify-center gap-2 text-sm'
      "
    >
      @for (item of items(); track $index; let last = $last) {
        @if (last) {
          <span
            aria-current="page"
            [class]="variant() === 'glass' ? 'max-w-50 truncate font-medium text-orange-400' : 'font-medium text-orange-500'"
          >
            {{ item.label }}
          </span>
        } @else {
          <a
            [routerLink]="item.link"
            [attr.aria-label]="item.label ? null : 'الرئيسية'"
            [class]="variant() === 'glass' ? 'text-white/70 transition-colors hover:text-white' : 'text-neutral-400 transition-colors hover:text-white'"
          >
            @if (item.icon) {
              <i class="fa-solid {{ item.icon }}"></i>
            }
            {{ item.label }}
          </a>
          <i
            class="fa-solid fa-chevron-left text-xs"
            [class]="variant() === 'glass' ? 'text-white/30' : 'text-neutral-600'"
          ></i>
        }
      }
    </nav>
  `,
})
export class Breadcrumb {
  readonly items = input.required<BreadcrumbItem[]>();
  readonly variant = input<'glass' | 'plain'>('glass');
}
