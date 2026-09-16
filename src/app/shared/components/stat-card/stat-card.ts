import { Component, input } from '@angular/core';
import { Stat } from '../../../data/models';

/** Glass stat tile: compact on the home hero, roomier on the about hero. */
@Component({
  selector: 'app-stat-card',
  template: `
    @if (size() === 'compact') {
      <div class="glass-card p-4 transition-transform duration-300 hover:scale-105">
        <i class="fa-solid {{ stat().icon }} mb-1 text-2xl leading-none text-orange-500"></i>
        <p class="gradient-text text-2xl font-bold md:text-3xl">{{ stat().value }}</p>
        <p class="text-sm text-neutral-500">{{ stat().label }}</p>
      </div>
    } @else {
      <div class="glass-card p-6">
        <i class="fa-solid {{ stat().icon }} mb-2 block text-2xl leading-none text-orange-500"></i>
        <div class="gradient-text mb-1 text-3xl font-bold">{{ stat().value }}</div>
        <div class="text-sm text-neutral-500">{{ stat().label }}</div>
      </div>
    }
  `,
})
export class StatCard {
  readonly stat = input.required<Stat>();
  readonly size = input<'compact' | 'large'>('compact');
}
