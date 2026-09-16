import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  template: `
    <div class="py-20 text-center">
      <div
        class="mx-auto mb-6 flex size-24 items-center justify-center rounded-full border border-line bg-card text-5xl text-neutral-500"
      >
        <i class="fa-regular {{ icon() }}"></i>
      </div>
      <h3 class="mb-3 text-2xl font-bold text-white">{{ title() }}</h3>
      <p class="mb-6 text-neutral-400">{{ message() }}</p>
      <ng-content />
    </div>
  `,
})
export class EmptyState {
  readonly title = input.required<string>();
  readonly message = input<string>();
  readonly icon = input('fa-file-lines');
}
