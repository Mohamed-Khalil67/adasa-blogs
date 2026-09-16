import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from '../../../data/site';

/** Desktop navigation pill. */
@Component({
  selector: 'app-nav-links',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="flex items-center rounded-full border border-line bg-card p-1.5">
      @for (link of links; track link.path) {
        <a
          [routerLink]="link.path"
          routerLinkActive="bg-linear-to-r from-orange-500 to-orange-600 !text-white"
          [routerLinkActiveOptions]="{ exact: !!link.exact }"
          ariaCurrentWhenActive="page"
          class="rounded-full px-5 py-2.5 text-sm font-medium text-neutral-400 transition-all duration-300 hover:text-white"
        >
          {{ link.label }}
        </a>
      }
    </div>
  `,
})
export class NavLinks {
  protected readonly links = NAV_LINKS;
}
