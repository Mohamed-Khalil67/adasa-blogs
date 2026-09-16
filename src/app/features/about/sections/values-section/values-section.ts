import { Component } from '@angular/core';
import { ABOUT_VALUES } from '../../../../data/site';
import { ValueCard } from '../../components/value-card/value-card';

@Component({
  selector: 'app-values-section',
  imports: [ValueCard],
  template: `
    <section class="border-y border-line bg-surface py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <h2 class="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-white md:text-4xl">
            <span class="h-8 w-1.5 rounded-full bg-linear-to-b from-orange-500 to-yellow-500"></span>
            قيمنا
            <span class="h-8 w-1.5 rounded-full bg-linear-to-b from-yellow-500 to-orange-500"></span>
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-neutral-400">المبادئ التي توجه كل ما نقوم بإنشائه</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          @for (value of values; track value.title) {
            <app-value-card [value]="value" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ValuesSection {
  protected readonly values = ABOUT_VALUES;
}
