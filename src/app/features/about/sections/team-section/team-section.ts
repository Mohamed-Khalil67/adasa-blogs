import { Component, input } from '@angular/core';
import { Author } from '../../../../data/models';
import { TeamCard } from '../../components/team-card/team-card';

@Component({
  selector: 'app-team-section',
  imports: [TeamCard],
  template: `
    <section class="bg-ink py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="section-label mb-4">فريقنا</span>
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">تعرف على كتابنا</h2>
          <p class="mx-auto max-w-2xl text-lg text-neutral-400">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          @for (author of authors(); track author.name) {
            <app-team-card [author]="author" />
          }
        </div>
      </div>
    </section>
  `,
})
export class TeamSection {
  readonly authors = input.required<readonly Author[]>();
}
