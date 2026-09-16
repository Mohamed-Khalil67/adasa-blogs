import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-ink">
      <div class="bg-grid absolute inset-0"></div>
      <div class="absolute inset-0 opacity-40">
        <div class="animate-float absolute top-1/4 left-1/4 size-96 rounded-full bg-orange-500/20 blur-[100px]"></div>
        <div class="animate-float-slow absolute right-1/4 bottom-1/4 size-80 rounded-full bg-yellow-500/10 blur-[100px]"></div>
      </div>

      <div class="relative mx-auto max-w-lg px-4 text-center">
        <div class="relative mb-6">
          <h1
            class="bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-[140px] leading-none font-black text-transparent select-none md:text-[180px]"
          >
            404
          </h1>
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 text-[140px] leading-none font-black text-orange-500/20 blur-2xl select-none md:text-[180px]"
          >
            404
          </div>
        </div>

        <div class="relative mx-auto mb-8 size-28">
          <div
            class="absolute inset-0 rounded-full border border-orange-500/30 bg-linear-to-br from-orange-500/20 to-yellow-500/20"
          ></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <i class="fa-regular fa-face-frown text-5xl text-orange-500"></i>
          </div>
          <div class="absolute -top-2 -right-2 size-5 rotate-12 animate-bounce rounded-lg bg-orange-500"></div>
          <div class="absolute -bottom-1 -left-3 size-4 animate-pulse rounded-full bg-yellow-500"></div>
        </div>

        <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">عفواً! الصفحة غير موجودة</h2>
        <p class="mb-8 text-lg text-neutral-400">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        <div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a routerLink="/" class="btn-primary gap-2">
            <i class="fa-solid fa-house"></i>
            الذهاب للرئيسية
          </a>
          <a routerLink="/blog" class="btn-secondary gap-2">
            <i class="fa-solid fa-book-open"></i>
            تصفح المقالات
          </a>
        </div>

        <div class="border-t border-line pt-8">
          <p class="mb-4 text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a routerLink="/blog" class="font-medium text-orange-500 hover:text-orange-400 hover:underline">المدونة</a>
            <span class="text-neutral-600">•</span>
            <a routerLink="/about" class="font-medium text-orange-500 hover:text-orange-400 hover:underline">من نحن</a>
            <span class="text-neutral-600">•</span>
            <a routerLink="/privacy" class="font-medium text-orange-500 hover:text-orange-400 hover:underline">الخصوصية</a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NotFound {}
