import { Component, input } from '@angular/core';
import { PanelTitle } from '../panel-title/panel-title';

/** Tags are display-only, like on the original site. */
@Component({
  selector: 'app-post-tags',
  imports: [PanelTitle],
  template: `
    <div class="mt-14 rounded-2xl border border-line bg-surface p-6">
      <app-panel-title class="mb-4 block" icon="fa-tags" title="الوسوم" />
      <div class="flex flex-wrap gap-2">
        @for (tag of tags(); track tag) {
          <span
            class="cursor-pointer rounded-full border border-line bg-elevated px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
          >
            #{{ tag }}
          </span>
        }
      </div>
    </div>
  `,
})
export class PostTags {
  readonly tags = input.required<string[]>();
}
