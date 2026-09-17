import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import POSTS from '../../data/posts.json';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
})
export class About {
  /** The site's writers, taken from the posts: unique by name, in order of first appearance. */
  protected readonly authors = [...new Map(POSTS.map((post) => [post.author.name, post.author])).values()];
}
