import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import POSTS from '../../data/posts.json';
import { ArDatePipe } from '../../shared/ar-date.pipe';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink, ArDatePipe],
  templateUrl: './post-details.html',
})
export class PostDetails {
  /** Route param, bound through withComponentInputBinding(). */
  readonly slug = input.required<string>();

  protected readonly post = computed(() => POSTS.find((post) => post.slug === this.slug()));

  /**
   * The post body, split into paragraphs and "## " headings. Headings get an anchor
   * id like the original site: section-0, section-1…
   */
  protected readonly blocks = computed(() => {
    let headingIndex = 0;
    return (this.post()?.content ?? '')
      .split('\n\n')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((text): { text: string; id?: string } =>
        text.startsWith('## ') ? { text: text.slice(3), id: `section-${headingIndex++}` } : { text },
      );
  });

  /** The headings only, for the table of contents. */
  protected readonly headings = computed(() =>
    this.blocks().flatMap((block) => (block.id ? [{ id: block.id, text: block.text }] : [])),
  );

  /** Same category first, then topped up with other posts. */
  protected readonly relatedPosts = computed(() => {
    const post = this.post();
    if (!post) return [];

    const others = POSTS.filter((other) => other.id !== post.id);
    return [
      ...others.filter((other) => other.category === post.category),
      ...others.filter((other) => other.category !== post.category),
    ].slice(0, 3);
  });
}
