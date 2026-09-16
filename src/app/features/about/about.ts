import { Component } from '@angular/core';
import { AUTHORS } from '../../data/posts';
import { SITE } from '../../data/site';
import { AboutHero } from './sections/about-hero/about-hero';
import { ContactCta } from './sections/contact-cta/contact-cta';
import { TeamSection } from './sections/team-section/team-section';
import { ValuesSection } from './sections/values-section/values-section';

@Component({
  selector: 'app-about',
  imports: [AboutHero, ValuesSection, TeamSection, ContactCta],
  template: `
    <app-about-hero [description]="site.description" />
    <app-values-section />
    <app-team-section [authors]="authors" />
    <app-contact-cta [email]="site.email" />
  `,
})
export class About {
  protected readonly site = SITE;
  protected readonly authors = AUTHORS;
}
