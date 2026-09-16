import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post, PostLayout } from '../../../data/models';
import { ArDatePipe } from '../../pipes/ar-date.pipe';

/** Post card in grid (vertical) or list (horizontal) layout. */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink, ArDatePipe],
  templateUrl: './post-card.html',
})
export class PostCard {
  readonly post = input.required<Post>();
  readonly layout = input<PostLayout>('grid');
}
