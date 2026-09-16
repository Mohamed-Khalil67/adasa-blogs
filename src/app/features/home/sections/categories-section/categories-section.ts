import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORY_SUMMARIES } from '../../../../data/posts';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-categories-section',
  imports: [RouterLink, SectionHeading],
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
          @for (category of categories; track category.name) {
            <a
              routerLink="/blog"
              [queryParams]="{ category: category.name }"
              class="group relative block overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30"
            >
              <div
                class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></div>

              <div class="relative z-10">
                <div
                  class="mb-4 flex size-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/20"
                >
                  <i
                    class="fa-solid {{ category.icon }} text-xl text-orange-500 transition-colors duration-300 group-hover:text-white"
                  ></i>
                </div>
                <h3 class="mb-1 text-lg font-bold text-white">{{ category.name }}</h3>
                <p class="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/80">
                  {{ category.count }} مقالة
                </p>

                <div
                  class="absolute top-6 left-6 flex size-8 items-center justify-center rounded-full bg-line opacity-0 transition-all duration-300 group-hover:bg-white/20 group-hover:opacity-100"
                >
                  <i class="fa-solid fa-arrow-left text-xs text-white"></i>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class CategoriesSection {
  protected readonly categories = CATEGORY_SUMMARIES;
}
