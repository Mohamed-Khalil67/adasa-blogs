import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE, SOCIAL_LINKS } from '../../../data/site';

@Component({
  selector: 'app-footer-brand',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="group mb-6 flex items-center gap-3">
      <div
        class="flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-orange-600 transition-all duration-300 group-hover:scale-105"
      >
        <span class="text-xl font-bold text-white">ع</span>
      </div>
      <span class="text-xl font-bold text-white">{{ site.name }}</span>
    </a>
    <p class="mb-6 text-sm leading-relaxed text-neutral-500">{{ site.description }}</p>

    <div class="flex gap-2">
      @for (link of socialLinks; track link.url) {
        <a
          [href]="link.url"
          target="_blank"
          rel="noopener noreferrer"
          [attr.aria-label]="link.label"
          class="flex size-10 items-center justify-center rounded-xl border border-line bg-card text-lg text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
        >
          <i [class]="link.icon"></i>
        </a>
      }
    </div>
  `,
})
export class FooterBrand {
  protected readonly site = SITE;
  protected readonly socialLinks = SOCIAL_LINKS;
}
