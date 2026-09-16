import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink } from '../../../data/models';

@Component({
  selector: 'app-footer-links',
  imports: [RouterLink],
  template: `
    <ul class="space-y-4">
      @for (link of links(); track link.label) {
        <li>
          <a
            [routerLink]="link.path"
            [queryParams]="link.queryParams"
            class="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
          >
            <i
              class="fa-solid fa-chevron-left -mr-4 w-4 text-xs text-orange-500 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100"
            ></i>
            {{ link.label }}
          </a>
        </li>
      }
    </ul>
  `,
})
export class FooterLinks {
  readonly links = input.required<NavLink[]>();
}
