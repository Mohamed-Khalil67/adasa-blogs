import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Section intro: label + title + subtitle, optionally with a "view all" link to the blog,
 * rendered as a gradient button or as plain text.
 */
@Component({
  selector: 'app-section-heading',
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    @if (align() === 'center') {
      <div class="mb-12 text-center">
        <ng-container [ngTemplateOutlet]="intro" />
      </div>
    } @else {
      <div class="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <ng-container [ngTemplateOutlet]="intro" />
        </div>

        @if (linkLabel()) {
          @if (linkStyle() === 'button') {
            <a
              routerLink="/blog"
              class="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              {{ linkLabel() }}
              <i class="fa-solid fa-arrow-left text-sm transition-transform group-hover:-translate-x-1"></i>
            </a>
          } @else {
            <a
              routerLink="/blog"
              class="group inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-400"
            >
              {{ linkLabel() }}
              <i class="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
            </a>
          }
        }
      </div>
    }

    <ng-template #intro>
      <span class="section-label mb-4">
        <span class="relative flex size-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
          <span class="relative inline-flex size-2 rounded-full bg-orange-500"></span>
        </span>
        {{ label() }}
      </span>
      <h2 class="section-title">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="section-subtitle max-w-lg" [class.mx-auto]="align() === 'center'">{{ subtitle() }}</p>
      }
    </ng-template>
  `,
})
export class SectionHeading {
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly linkLabel = input<string>();
  readonly linkStyle = input<'button' | 'text'>('text');
  readonly align = input<'start' | 'center'>('start');
}
