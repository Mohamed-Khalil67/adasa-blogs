import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../../data/categories';
import POSTS from '../../data/posts.json';
import { ArDatePipe } from '../../shared/ar-date.pipe';
import { PostCard } from '../../shared/post-card/post-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PostCard, ArDatePipe],
  templateUrl: './home.html',
})
export class Home {
  protected readonly featuredPosts = POSTS.filter((post) => post.featured);
  protected readonly latestPosts = POSTS.filter((post) => !post.featured).slice(0, 3);

  /** Counted from the posts: the counts in the original JSON were out of date. */
  protected readonly categories = CATEGORIES.map((category) => ({
    ...category,
    count: POSTS.filter((post) => post.category === category.name).length,
  }));
}
