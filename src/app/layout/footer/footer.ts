import { Component } from '@angular/core';
import { NavLink } from '../../data/models';
import { CATEGORIES, NAV_LINKS } from '../../data/site';
import { NewsletterForm } from '../../shared/components/newsletter-form/newsletter-form';
import { FooterBottom } from './footer-bottom/footer-bottom';
import { FooterBrand } from './footer-brand/footer-brand';
import { FooterColumn } from './footer-column/footer-column';
import { FooterLinks } from './footer-links/footer-links';

@Component({
  selector: 'app-footer',
  imports: [FooterBrand, FooterColumn, FooterLinks, FooterBottom, NewsletterForm],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly exploreLinks = NAV_LINKS;
  protected readonly categoryLinks: NavLink[] = CATEGORIES.slice(0, 4).map((category) => ({
    label: category.name,
    path: '/blog',
    queryParams: { category: category.name },
  }));
}
