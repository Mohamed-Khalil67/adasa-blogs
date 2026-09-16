import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Author } from '../../../../data/models';

/** Writer card. The social buttons are placeholders (they link nowhere on the original site). */
@Component({
  selector: 'app-team-card',
  imports: [NgOptimizedImage],
  template: `
    <div
      class="group rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30"
    >
      <div class="relative mb-4 inline-block">
        <img
          [ngSrc]="author().avatar"
          [alt]="author().name"
          width="96"
          height="96"
          class="rounded-full object-cover ring-4 ring-line transition-all group-hover:ring-orange-500/30"
        />
        <div
          class="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full border-2 border-card bg-orange-500"
        >
          <i class="fa-solid fa-check text-[10px] text-white"></i>
        </div>
      </div>
      <h3 class="text-lg font-bold text-white">{{ author().name }}</h3>
      <p class="mb-4 text-sm font-medium text-orange-500">{{ author().role }}</p>
      <div class="flex justify-center gap-3">
        @for (network of networks; track network.label) {
          <button
            type="button"
            [attr.aria-label]="network.label + ' - ' + author().name"
            class="flex size-9 cursor-pointer items-center justify-center rounded-lg bg-line text-sm text-neutral-500 transition-colors hover:text-white"
            [class]="network.hover"
          >
            <i [class]="network.icon"></i>
          </button>
        }
      </div>
    </div>
  `,
})
export class TeamCard {
  readonly author = input.required<Author>();

  protected readonly networks = [
    { label: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', hover: 'hover:bg-orange-500' },
    { label: 'GitHub', icon: 'fa-brands fa-github', hover: 'hover:bg-neutral-700' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', hover: 'hover:bg-blue-600' },
  ];
}
