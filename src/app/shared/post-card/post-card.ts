import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type posts from '../../data/posts.json';
import { ArDatePipe } from '../ar-date.pipe';

/** One entry of data/posts.json. */
type Post = (typeof posts)[number];

/** Post card, used by the home page and the blog. */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink, ArDatePipe],
  templateUrl: './post-card.html',
})
export class PostCard {
  readonly post = input.required<Post>();
}
