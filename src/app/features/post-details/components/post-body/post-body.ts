import { Component, input } from '@angular/core';
import { ContentBlock } from '../../../../data/models';

@Component({
  selector: 'app-post-body',
  template: `
    <div class="mb-10 rounded-2xl border border-orange-500/20 bg-linear-to-r from-orange-500/10 to-yellow-500/5 p-6">
      <p class="text-lg leading-relaxed text-neutral-200 italic">"{{ excerpt() }}"</p>
    </div>

    <div>
      @for (block of blocks(); track $index) {
        @if (block.type === 'heading') {
          <h2
            [id]="block.id"
            class="mt-14 mb-6 flex scroll-mt-24 items-center gap-4 text-2xl font-bold text-white md:text-3xl"
          >
            <span class="flex size-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
              <i class="fa-solid fa-camera text-orange-500"></i>
            </span>
            {{ block.text }}
          </h2>
        } @else {
          <p class="mb-6 text-lg leading-relaxed text-neutral-300">{{ block.text }}</p>
        }
      }
    </div>
  `,
})
export class PostBody {
  readonly excerpt = input.required<string>();
  readonly blocks = input.required<ContentBlock[]>();
}
