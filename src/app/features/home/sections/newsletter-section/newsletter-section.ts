import { Component } from '@angular/core';
import { AUTHORS } from '../../../../data/posts';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.html',
})
export class NewsletterSection {
  /** A few readers' faces shown next to the subscriber count. */
  protected readonly avatars = AUTHORS.slice(0, 3);
}
