import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../data/site';

@Component({
  selector: 'app-footer-bottom',
  imports: [RouterLink],
  template: `
    <div class="relative border-t border-line">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p class="text-sm text-neutral-600">
            © {{ year }} {{ siteName }}. صنع بكل
            <i class="fa-solid fa-heart text-orange-500"></i>
            جميع الحقوق محفوظة.
          </p>
          <div class="flex gap-6">
            <a routerLink="/privacy" class="text-sm text-neutral-600 transition-colors duration-300 hover:text-orange-500">
              سياسة الخصوصية
            </a>
            <a routerLink="/terms" class="text-sm text-neutral-600 transition-colors duration-300 hover:text-orange-500">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FooterBottom {
  protected readonly siteName = SITE.name;
  protected readonly year = new Date().getFullYear();
}
