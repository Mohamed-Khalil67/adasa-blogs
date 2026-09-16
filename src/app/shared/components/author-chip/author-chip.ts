import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Author } from '../../../data/models';

/** Avatar + name + subtitle (role or date). */
@Component({
  selector: 'app-author-chip',
  imports: [NgOptimizedImage],
  template: `
    <div class="flex items-center gap-3">
      <div class="relative shrink-0">
        <img
          [ngSrc]="author().avatar"
          [alt]="author().name"
          [width]="size()"
          [height]="size()"
          class="rounded-full object-cover ring-2 ring-line"
          [class.shadow-md]="dot()"
        />
        @if (dot()) {
          <span class="absolute -bottom-1 -left-1 size-4 rounded-full border-2 border-card bg-orange-500"></span>
        }
      </div>
      <div>
        <p class="text-sm text-white" [class]="strong() ? 'font-semibold' : 'font-medium'">{{ author().name }}</p>
        @if (subtitle()) {
          <p class="text-xs text-neutral-500">{{ subtitle() }}</p>
        }
      </div>
    </div>
  `,
})
export class AuthorChip {
  readonly author = input.required<Author>();
  readonly subtitle = input<string>();
  readonly size = input(36);
  /** Orange status dot on the avatar. */
  readonly dot = input(false);
  readonly strong = input(false);
}
