import { Component } from '@angular/core';
import { CategoriesSection } from './sections/categories-section/categories-section';
import { FeaturedPosts } from './sections/featured-posts/featured-posts';
import { HeroSection } from './sections/hero-section/hero-section';
import { LatestPosts } from './sections/latest-posts/latest-posts';
import { NewsletterSection } from './sections/newsletter-section/newsletter-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeaturedPosts, CategoriesSection, LatestPosts, NewsletterSection],
  template: `
    <app-hero-section />
    <app-featured-posts />
    <app-categories-section />
    <app-latest-posts />
    <app-newsletter-section />
  `,
})
export class Home {}
