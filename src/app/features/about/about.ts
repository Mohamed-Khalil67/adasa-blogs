import { Component } from '@angular/core';
import { AboutHero } from './sections/about-hero/about-hero';
import { ContactCta } from './sections/contact-cta/contact-cta';
import { TeamSection } from './sections/team-section/team-section';
import { ValuesSection } from './sections/values-section/values-section';

@Component({
  selector: 'app-about',
  imports: [AboutHero, ValuesSection, TeamSection, ContactCta],
  template: `
    <app-about-hero />
    <app-values-section />
    <app-team-section />
    <app-contact-cta />
  `,
})
export class About {}
