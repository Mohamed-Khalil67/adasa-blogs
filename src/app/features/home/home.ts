import { Component } from '@angular/core';
import { AUTHORS, CATEGORY_SUMMARIES, FEATURED_POSTS, LATEST_POSTS } from '../../data/posts';
import { SITE } from '../../data/site';
import { CategoriesSection } from './sections/categories-section/categories-section';
import { FeaturedPosts } from './sections/featured-posts/featured-posts';
import { HeroSection } from './sections/hero-section/hero-section';
import { LatestPosts } from './sections/latest-posts/latest-posts';
import { NewsletterSection } from './sections/newsletter-section/newsletter-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeaturedPosts, CategoriesSection, LatestPosts, NewsletterSection],
  template: `
    <app-hero-section [siteName]="siteName" />
    <app-featured-posts [posts]="featuredPosts" />
    <app-categories-section [categories]="categories" />
    <app-latest-posts [posts]="latestPosts" />
    <app-newsletter-section [avatars]="readerAvatars" />
  `,
})
export class Home {
  protected readonly siteName = SITE.name;
  protected readonly featuredPosts = FEATURED_POSTS;
  protected readonly categories = CATEGORY_SUMMARIES;
  protected readonly latestPosts = LATEST_POSTS;
  protected readonly readerAvatars = AUTHORS.slice(0, 3);
}
