import { DOCUMENT } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { TocItem } from '../../../../data/models';
import { PanelTitle } from '../panel-title/panel-title';

@Component({
  selector: 'app-table-of-contents',
  imports: [PanelTitle],
  template: `
    <div class="rounded-2xl border border-line bg-surface p-6">
      <app-panel-title class="mb-5 block" icon="fa-list" title="محتويات المقال" />
      <nav aria-label="محتويات المقال" class="space-y-2">
        @for (item of items(); track item.id; let i = $index) {
          <!-- Scrolled manually: a plain "#id" href would resolve against <base href> and leave the page. -->
          <a
            [href]="'#' + item.id"
            (click)="scrollTo($event, item.id)"
            class="group flex items-center gap-3 rounded-xl p-3 text-neutral-400 transition-all duration-300 hover:bg-orange-500/5 hover:text-orange-500"
          >
            <span
              class="flex size-6 shrink-0 items-center justify-center rounded-lg bg-elevated text-xs font-bold text-neutral-500 transition-colors group-hover:bg-orange-500/10 group-hover:text-orange-500"
            >
              {{ i + 1 }}
            </span>
            <span class="text-sm">{{ item.title }}</span>
          </a>
        }
      </nav>
    </div>
  `,
})
export class TableOfContents {
  readonly items = input.required<TocItem[]>();
  private readonly document = inject(DOCUMENT);

  protected scrollTo(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
