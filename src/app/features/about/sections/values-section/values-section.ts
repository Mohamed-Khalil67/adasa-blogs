import { Component } from '@angular/core';

@Component({
  selector: 'app-values-section',
  template: `
    <section class="border-y border-line bg-surface py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <h2 class="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-white md:text-4xl">
            <span class="h-8 w-1.5 rounded-full bg-linear-to-b from-orange-500 to-yellow-500"></span>
            قيمنا
            <span class="h-8 w-1.5 rounded-full bg-linear-to-b from-yellow-500 to-orange-500"></span>
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-neutral-400">المبادئ التي توجه كل ما نقوم بإنشائه</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30">
            <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            <div class="relative">
              <i class="fa-solid fa-bullseye mb-4 block text-4xl leading-none text-orange-500"></i>
              <h3 class="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">الجودة أولاً</h3>
              <p class="text-sm text-neutral-400">محتوى مدروس ومكتوب بخبرة</p>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30">
            <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            <div class="relative">
              <i class="fa-solid fa-bolt mb-4 block text-4xl leading-none text-orange-500"></i>
              <h3 class="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">تركيز عملي</h3>
              <p class="text-sm text-neutral-400">أمثلة واقعية يمكنك تطبيقها اليوم</p>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30">
            <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            <div class="relative">
              <i class="fa-solid fa-handshake mb-4 block text-4xl leading-none text-orange-500"></i>
              <h3 class="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">المجتمع</h3>
              <p class="text-sm text-neutral-400">تعلم مع آلاف المصورين</p>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30">
            <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            <div class="relative">
              <i class="fa-solid fa-arrows-rotate mb-4 block text-4xl leading-none text-orange-500"></i>
              <h3 class="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">دائماً محدث</h3>
              <p class="text-sm text-neutral-400">أحدث الاتجاهات وأفضل الممارسات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ValuesSection {}
