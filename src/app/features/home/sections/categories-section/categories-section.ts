import { Component, input } from '@angular/core';
import { CategorySummary } from '../../../../data/models';
import { CategoryCard } from '../../../../shared/components/category-card/category-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-categories-section',
  imports: [SectionHeading, CategoryCard],
  template: `
    <section class="relative border-y border-line bg-surface py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-heading
          label="التصنيفات"
          title="استكشف حسب الموضوع"
          subtitle="اعثر على محتوى مصمم حسب اهتماماتك"
          [align]="'center'"
        />
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          @for (category of categories(); track category.name) {
            <app-category-card [category]="category" />
          }
        </div>
      </div>
    </section>
  `,
})
export class CategoriesSection {
  readonly categories = input.required<readonly CategorySummary[]>();
}
