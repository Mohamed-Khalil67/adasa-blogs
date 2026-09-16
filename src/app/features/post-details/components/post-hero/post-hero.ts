import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbItem, Post } from '../../../../data/models';
import { ArDatePipe } from '../../../../shared/pipes/ar-date.pipe';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-post-hero',
  imports: [RouterLink, NgOptimizedImage, ArDatePipe, Breadcrumb],
  template: `
    <div class="relative h-[60vh] min-h-125 overflow-hidden">
      <img [ngSrc]="post().image" [alt]="post().title" fill="true" priority="true" sizes="100vw" class="object-cover" />
      <div class="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent"></div>
      <div class="absolute inset-0 bg-linear-to-r from-ink/30 to-transparent"></div>

      <div class="absolute top-8 right-8 left-8">
        <app-breadcrumb [items]="breadcrumb()" [variant]="'glass'" />
      </div>

      <div class="absolute right-0 bottom-0 left-0 p-8 md:p-12">
        <div class="mx-auto max-w-5xl">
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <a
              routerLink="/blog"
              [queryParams]="{ category: post().category }"
              class="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600"
            >
              {{ post().category }}
            </a>
            <div class="flex items-center gap-4 text-sm text-white/70">
              <span class="flex items-center gap-2">
                <i class="fa-regular fa-calendar"></i>
                {{ post().date | arDate }}
              </span>
              <span class="flex items-center gap-2">
                <i class="fa-regular fa-clock"></i>
                {{ post().readTime }}
              </span>
            </div>
          </div>

          <h1 class="mb-6 max-w-4xl text-3xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
            {{ post().title }}
          </h1>

          <div class="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <img
              [ngSrc]="post().author.avatar"
              [alt]="post().author.name"
              width="56"
              height="56"
              class="rounded-full object-cover ring-2 ring-orange-500/50"
            />
            <div>
              <p class="font-bold text-white">{{ post().author.name }}</p>
              <p class="text-sm text-white/60">{{ post().author.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PostHero {
  readonly post = input.required<Post>();

  protected readonly breadcrumb = computed<BreadcrumbItem[]>(() => [
    { icon: 'fa-house', link: '/' },
    { label: 'المدونة', link: '/blog' },
    { label: this.post().category },
  ]);
}
