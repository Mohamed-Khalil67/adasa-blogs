import { Component, input } from '@angular/core';

/** Icon tile + title used at the top of the article's side panels. */
@Component({
  selector: 'app-panel-title',
  template: `
    <div class="flex items-center gap-3">
      <div class="flex size-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
        <i class="fa-solid {{ icon() }} text-orange-500"></i>
      </div>
      <h3 class="font-bold text-white">{{ title() }}</h3>
    </div>
  `,
})
export class PanelTitle {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
}
