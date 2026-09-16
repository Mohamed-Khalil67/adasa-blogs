import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../data/models';
import { findPost, getRelatedPosts, parsePostContent } from '../../data/posts';
import { ArDatePipe } from '../../shared/pipes/ar-date.pipe';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink, ArDatePipe],
  templateUrl: './post-details.html',
})
export class PostDetails {
  /** Route param; the canMatch check in app.routes.ts guarantees the post exists. */
  readonly slug = input.required<string>();

  private readonly document = inject(DOCUMENT);

  protected readonly post = computed(() => findPost(this.slug()) as Post);
  protected readonly content = computed(() => parsePostContent(this.post().content));
  protected readonly relatedPosts = computed(() => getRelatedPosts(this.post()));

  protected scrollToSection(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
