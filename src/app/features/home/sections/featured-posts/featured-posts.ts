import { Component, input } from '@angular/core';
import { Post } from '../../../../data/models';
import { FeaturedPostCard } from '../../../../shared/components/featured-post-card/featured-post-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-featured-posts',
  imports: [SectionHeading, FeaturedPostCard],
  template: `
    <section class="relative overflow-hidden bg-ink py-24">
      <div class="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-orange-500/5 to-transparent"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-heading
          label="مميز"
          title="مقالات مختارة"
          subtitle="محتوى منتقى لبدء رحلة تعلمك"
          linkLabel="عرض الكل"
          [linkStyle]="'button'"
        />
        <div class="space-y-8">
          @for (post of posts(); track post.id; let first = $first) {
            <app-featured-post-card class="block" [post]="post" [priority]="first" />
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturedPosts {
  readonly posts = input.required<readonly Post[]>();
}
