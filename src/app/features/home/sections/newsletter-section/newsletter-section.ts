import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Author } from '../../../../data/models';
import { NewsletterForm } from '../../../../shared/components/newsletter-form/newsletter-form';

@Component({
  selector: 'app-newsletter-section',
  imports: [NgOptimizedImage, NewsletterForm],
  templateUrl: './newsletter-section.html',
})
export class NewsletterSection {
  /** A few readers' faces shown next to the subscriber count. */
  readonly avatars = input.required<readonly Author[]>();
}
