import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post, TocItem } from '../../../../data/models';
import { ArDatePipe } from '../../../../shared/pipes/ar-date.pipe';
import { TableOfContents } from '../table-of-contents/table-of-contents';

@Component({
  selector: 'app-post-sidebar',
  imports: [RouterLink, ArDatePipe, TableOfContents],
  template: `
    <div class="space-y-6 lg:sticky lg:top-24">
      @if (toc().length) {
        <app-table-of-contents class="block" [items]="toc()" />
      }

      <div class="rounded-2xl border border-line bg-surface p-6">
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-xl bg-ink p-4 text-center">
            <i class="fa-regular fa-clock mb-2 text-xl leading-none text-orange-500"></i>
            <p class="font-bold text-white">{{ post().readTime }}</p>
            <p class="text-xs text-neutral-500">وقت القراءة</p>
          </div>
          <div class="rounded-xl bg-ink p-4 text-center">
            <i class="fa-regular fa-calendar mb-2 text-xl leading-none text-orange-500"></i>
            <p class="font-bold text-white">{{ post().date | arDate: 'short' }}</p>
            <p class="text-xs text-neutral-500">تاريخ النشر</p>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-orange-500/20 bg-linear-to-br from-orange-500/10 to-yellow-500/5 p-6">
        <div class="text-center">
          <div class="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-orange-500/20">
            <i class="fa-solid fa-envelope text-xl text-orange-500"></i>
          </div>
          <h3 class="mb-2 font-bold text-white">لا تفوّت جديدنا</h3>
          <p class="mb-4 text-sm text-neutral-400">اشترك للحصول على أحدث المقالات</p>
          <a
            routerLink="/blog"
            class="block w-full rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
          >
            تصفح المزيد
          </a>
        </div>
      </div>
    </div>
  `,
})
export class PostSidebar {
  readonly post = input.required<Post>();
  readonly toc = input.required<TocItem[]>();
}
