import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../data/models';
import { ArDatePipe } from '../../pipes/ar-date.pipe';
import { AuthorChip } from '../author-chip/author-chip';
import { CategoryBadge } from '../category-badge/category-badge';

@Component({
  selector: 'app-featured-post-card',
  imports: [RouterLink, NgOptimizedImage, ArDatePipe, AuthorChip, CategoryBadge],
  templateUrl: './featured-post-card.html',
})
export class FeaturedPostCard {
  readonly post = input.required<Post>();
  readonly priority = input(false);
}
