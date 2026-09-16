import { Component, input } from '@angular/core';
import { ABOUT_STATS } from '../../../../data/site';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-about-hero',
  imports: [PageHero, StatCard],
  template: `
    <app-page-hero
      [variant]="'about'"
      label="من نحن"
      title="مهمتنا هي"
      highlight="الإعلام والإلهام"
      [subtitle]="description() + ' ' + mission"
    >
      <div class="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        @for (stat of stats; track stat.label) {
          <app-stat-card [stat]="stat" size="large" />
        }
      </div>
    </app-page-hero>
  `,
})
export class AboutHero {
  readonly description = input.required<string>();
  protected readonly stats = ABOUT_STATS;
  protected readonly mission =
    'نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.';
}
