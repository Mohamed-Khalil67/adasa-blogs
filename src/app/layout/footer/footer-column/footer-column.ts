import { Component, input } from '@angular/core';

/** Footer column: short gradient bar + title, projected content below. */
@Component({
  selector: 'app-footer-column',
  template: `
    <h3 class="mb-6 flex items-center gap-2 font-semibold text-white">
      <span class="h-0.5 w-8 rounded-full bg-linear-to-r from-orange-500 to-yellow-500"></span>
      {{ title() }}
    </h3>
    <ng-content />
  `,
})
export class FooterColumn {
  readonly title = input.required<string>();
}
