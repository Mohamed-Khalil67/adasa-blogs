import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURED_POSTS } from '../../../../data/posts';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { ArDatePipe } from '../../../../shared/pipes/ar-date.pipe';

@Component({
  selector: 'app-featured-posts',
  imports: [RouterLink, SectionHeading, ArDatePipe],
  templateUrl: './featured-posts.html',
})
export class FeaturedPosts {
  protected readonly posts = FEATURED_POSTS;
}
