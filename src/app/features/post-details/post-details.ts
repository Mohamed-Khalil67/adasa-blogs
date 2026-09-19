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

  /** The route's canMatch guard sends unknown slugs to the 404, so the post always exists. */
  protected readonly post = computed(() => POSTS.find((post) => post.slug === this.slug())!);

  /**
   * The post body, split into paragraphs and "## " headings. Headings get an anchor
   * id like the original site: section-0, section-1…
   */
  protected readonly blocks = computed(() => {
    let headingIndex = 0;
    return this.post()
      .content.split('\n\n')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((text): { text: string; id?: string } =>
        text.startsWith('## ')
          ? { text: text.slice(3), id: `section-${headingIndex++}` }
          : { text },
      );
  });

  /** The headings only, for the table of contents. */
  protected readonly headings = computed(() => this.blocks().filter((block) => block.id));

  /** Same category first, then topped up with other posts. */
  protected readonly relatedPosts = computed(() => {
    const { id, category } = this.post();
    return POSTS.filter((post) => post.id !== id)
      .sort((a, b) => Number(b.category === category) - Number(a.category === category))
      .slice(0, 3);
  });
}
