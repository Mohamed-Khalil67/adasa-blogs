import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../../data/models';
import { CategoryBadge } from '../../../../shared/components/category-badge/category-badge';

@Component({
  selector: 'app-related-post-card',
  imports: [RouterLink, NgOptimizedImage, CategoryBadge],
  template: `
    <a
      [routerLink]="['/blog', post().slug]"
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:border-orange-500/30"
    >
      <div class="relative h-48 overflow-hidden">
        <img
          [ngSrc]="post().image"
          [alt]="post().title"
          width="400"
          height="192"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-linear-to-t from-surface to-transparent"></div>
        <app-category-badge class="absolute top-4 right-4" [name]="post().category" [variant]="'solid'" />
      </div>
      <div class=""></div>
      <div class="flex flex-1 flex-col justify-between gap-3 p-5">
        <h3 class="mb-3 line-clamp-2 font-bold text-white transition-colors group-hover:text-orange-500">
          {{ post().title }}
        </h3>
        <div class="flex items-center justify-between text-sm text-neutral-500">
          <span class="flex items-center gap-2">
            <img [ngSrc]="post().author.avatar" [alt]="post().author.name" width="24" height="24" class="rounded-full" />
            {{ post().author.name }}
          </span>
          <span>{{ post().readTime }}</span>
        </div>
      </div>
    </a>
  `,
})
export class RelatedPostCard {
  readonly post = input.required<Post>();
}
