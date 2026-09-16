import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../../data/models';
import { RelatedPostCard } from '../related-post-card/related-post-card';

@Component({
  selector: 'app-related-posts',
  imports: [RouterLink, RelatedPostCard],
  template: `
    <section class="mt-20 border-t border-line pt-12">
      <div class="mb-10 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <span class="flex size-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
            <i class="fa-solid fa-images text-xl text-orange-500"></i>
          </span>
          <div>
            <h2 class="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
            <p class="text-sm text-neutral-500">استكشف المزيد من المحتوى المميز</p>
          </div>
        </div>
        <a
          routerLink="/blog"
          class="group hidden items-center gap-2 text-orange-500 transition-colors hover:text-orange-400 sm:flex"
        >
          عرض الكل
          <i class="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
        </a>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (post of posts(); track post.id) {
          <app-related-post-card [post]="post" />
        }
      </div>
    </section>
  `,
})
export class RelatedPosts {
  readonly posts = input.required<Post[]>();
}
