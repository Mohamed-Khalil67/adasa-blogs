import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../data/site';

@Component({
  selector: 'app-logo',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <a routerLink="/" class="group flex items-center gap-3">
      <div class="relative size-12 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
        <img ngSrc="logo.png" alt="Photography Logo" width="48" height="48" priority="true" class="size-full object-cover" />
      </div>
      <div class="flex flex-col">
        <span class="bg-linear-to-r from-white to-neutral-300 bg-clip-text text-xl font-bold text-transparent">
          {{ site.name }}
        </span>
        <span class="hidden text-xs tracking-wide text-orange-400/80 sm:block">{{ site.tagline }}</span>
      </div>
    </a>
  `,
})
export class Logo {
  protected readonly site = SITE;
}
