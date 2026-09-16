import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { DEFAULT_AUTHOR_BIO } from '../../../../data/site';
import { Author } from '../../../../data/models';

@Component({
  selector: 'app-author-box',
  imports: [NgOptimizedImage],
  template: `
    <div class="mt-6 rounded-2xl border border-line bg-linear-to-br from-card to-surface p-8">
      <div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <img
          [ngSrc]="author().avatar"
          [alt]="author().name"
          width="96"
          height="96"
          class="rounded-2xl object-cover ring-4 ring-orange-500/20"
        />
        <div class="flex-1 text-center sm:text-right">
          <span class="text-xs font-semibold tracking-wider text-orange-500 uppercase">كاتب المقال</span>
          <h3 class="mt-1 text-xl font-bold text-white">{{ author().name }}</h3>
          <p class="mb-3 text-sm text-neutral-500">{{ author().role }}</p>
          <p class="text-sm leading-relaxed text-neutral-400">{{ bio }}</p>
        </div>
      </div>
    </div>
  `,
})
export class AuthorBox {
  readonly author = input.required<Author>();
  protected readonly bio = DEFAULT_AUTHOR_BIO;
}
