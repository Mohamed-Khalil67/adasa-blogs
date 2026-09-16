import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from '../../../data/site';

/** Dropdown panel shown below the header on small screens; slides open via max-height. */
@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div
      id="mobile-menu"
      class="overflow-hidden transition-all duration-300 md:hidden"
      [class]="open() ? 'max-h-96 pb-4' : 'max-h-0'"
      [attr.aria-hidden]="!open()"
      [attr.inert]="open() ? null : ''"
    >
      <div class="rounded-2xl border border-line bg-card p-4 backdrop-blur-xl">
        <div class="flex flex-col space-y-1">
          @for (link of links; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="border-orange-500/30 bg-orange-500/10 !text-orange-500 hover:bg-orange-500/10"
              [routerLinkActiveOptions]="{ exact: !!link.exact }"
              ariaCurrentWhenActive="page"
              class="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-neutral-400 transition-all duration-300 hover:bg-elevated hover:text-white"
            >
              {{ link.label }}
            </a>
          }
          <a routerLink="/blog" class="btn-primary mt-2 text-center text-sm">ابدأ القراءة</a>
        </div>
      </div>
    </div>
  `,
})
export class MobileMenu {
  protected readonly links = NAV_LINKS;
  readonly open = input(false);
}
