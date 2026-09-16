import { Component, input } from '@angular/core';
import { Feature } from '../../../../data/models';

@Component({
  selector: 'app-value-card',
  template: `
    <div
      class="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30"
    >
      <div
        class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
      ></div>
      <div class="relative">
        <i class="fa-solid {{ value().icon }} mb-4 block text-4xl leading-none text-orange-500"></i>
        <h3 class="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">
          {{ value().title }}
        </h3>
        <p class="text-sm text-neutral-400">{{ value().description }}</p>
      </div>
    </div>
  `,
})
export class ValueCard {
  readonly value = input.required<Feature>();
}
