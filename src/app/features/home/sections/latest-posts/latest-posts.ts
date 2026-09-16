import { Component } from '@angular/core';
import { LATEST_POSTS } from '../../../../data/posts';
import { PostCard } from '../../../../shared/components/post-card/post-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-latest-posts',
  imports: [SectionHeading, PostCard],
  template: `
    <section class="relative overflow-hidden bg-ink py-24">
      <div class="absolute bottom-0 left-0 h-full w-1/3 bg-linear-to-r from-orange-500/5 to-transparent"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <app-section-heading
          label="الأحدث"
          title="أحدث المقالات"
          subtitle="محتوى جديد طازج من المطبعة"
          linkLabel="عرض جميع المقالات"
        />
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (post of posts; track post.id) {
            <app-post-card [post]="post" />
          }
        </div>
      </div>
    </section>
  `,
})
export class LatestPosts {
  protected readonly posts = LATEST_POSTS;
}
