import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post, PostLayout } from '../../../data/models';
import { ArDatePipe } from '../../pipes/ar-date.pipe';
import { AuthorChip } from '../author-chip/author-chip';
import { CategoryBadge } from '../category-badge/category-badge';

/** Post card in grid (vertical) or list (horizontal) layout. */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink, NgOptimizedImage, ArDatePipe, AuthorChip, CategoryBadge],
  templateUrl: './post-card.html',
})
export class PostCard {
  readonly post = input.required<Post>();
  readonly layout = input<PostLayout>('grid');
}
