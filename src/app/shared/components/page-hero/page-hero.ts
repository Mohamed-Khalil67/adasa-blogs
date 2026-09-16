import { Component, input } from '@angular/core';

/**
 * Centered page intro over the grid background.
 * - blog: label with an icon
 * - about: taller, narrower, label with a pulsing dot; extra content (stats) is projected below
 */
@Component({
  selector: 'app-page-hero',
  template: `
    <section class="relative overflow-hidden" [class]="variant() === 'about' ? 'py-24' : 'py-20'">
      <div class="absolute inset-0 bg-ink"></div>
      <div class="bg-grid absolute inset-0"></div>

      @if (variant() === 'about') {
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-20 left-20 size-72 rounded-full bg-orange-500/20 blur-[100px]"></div>
          <div class="absolute right-20 bottom-20 size-96 rounded-full bg-yellow-500/10 blur-[120px]"></div>
        </div>
      } @else {
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/4 size-96 rounded-full bg-orange-500/10 blur-3xl"></div>
          <div class="absolute right-1/4 bottom-0 size-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
        </div>
      }

      <div
        class="relative mx-auto px-4 text-center sm:px-6 lg:px-8"
        [class]="variant() === 'about' ? 'max-w-6xl' : 'max-w-7xl'"
      >
        <span class="section-label mb-6">
          @if (icon()) {
            <i class="fa-solid {{ icon() }}"></i>
          } @else {
            <span class="size-2 animate-pulse rounded-full bg-orange-500"></span>
          }
          {{ label() }}
        </span>

        <h1 class="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {{ title() }}
          <span class="gradient-text">{{ highlight() }}</span>
        </h1>

        @if (variant() === 'about') {
          <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">{{ subtitle() }}</p>
        } @else {
          <p class="mx-auto max-w-2xl text-xl text-neutral-400">{{ subtitle() }}</p>
        }

        <ng-content />
      </div>
    </section>
  `,
})
export class PageHero {
  readonly label = input.required<string>();
  readonly icon = input<string>();
  readonly title = input.required<string>();
  readonly highlight = input<string>();
  readonly subtitle = input<string>();
  readonly variant = input<'blog' | 'about'>('blog');
}
