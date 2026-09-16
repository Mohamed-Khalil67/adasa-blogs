import { Component, computed, input } from '@angular/core';
import { Post } from '../../data/models';
import { findPost, getRelatedPosts, parsePostContent } from '../../data/posts';
import { AuthorBox } from './components/author-box/author-box';
import { PostBody } from './components/post-body/post-body';
import { PostHero } from './components/post-hero/post-hero';
import { PostSidebar } from './components/post-sidebar/post-sidebar';
import { PostTags } from './components/post-tags/post-tags';
import { RelatedPosts } from './components/related-posts/related-posts';
import { ShareButtons } from './components/share-buttons/share-buttons';

@Component({
  selector: 'app-post-details',
  imports: [PostHero, PostBody, PostTags, ShareButtons, AuthorBox, PostSidebar, RelatedPosts],
  templateUrl: './post-details.html',
})
export class PostDetails {
  /** Route param; the canMatch check in app.routes.ts guarantees the post exists. */
  readonly slug = input.required<string>();

  protected readonly post = computed(() => findPost(this.slug()) as Post);
  protected readonly content = computed(() => parsePostContent(this.post().content));
  protected readonly relatedPosts = computed(() => getRelatedPosts(this.post()));
}
