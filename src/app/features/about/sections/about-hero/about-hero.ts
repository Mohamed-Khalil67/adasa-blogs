import { Component } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  template: `
    <section class="relative overflow-hidden py-24">
      <div class="absolute inset-0 bg-ink"></div>
      <div class="bg-grid absolute inset-0"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-20 size-72 rounded-full bg-orange-500/20 blur-[100px]"></div>
        <div class="absolute right-20 bottom-20 size-96 rounded-full bg-yellow-500/10 blur-[120px]"></div>
      </div>

      <div class="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <span class="section-label mb-6">
          <span class="size-2 animate-pulse rounded-full bg-orange-500"></span>
          من نحن
        </span>
        <h1 class="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          مهمتنا هي <span class="gradient-text">الإعلام والإلهام</span>
        </h1>
        <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون
          بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        <!-- Stats -->
        <div class="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          <div class="glass-card p-6">
            <i class="fa-solid fa-users mb-2 block text-2xl leading-none text-orange-500"></i>
            <div class="gradient-text mb-1 text-3xl font-bold">+2مليون</div>
            <div class="text-sm text-neutral-500">قارئ شهرياً</div>
          </div>
          <div class="glass-card p-6">
            <i class="fa-solid fa-newspaper mb-2 block text-2xl leading-none text-orange-500"></i>
            <div class="gradient-text mb-1 text-3xl font-bold">+500</div>
            <div class="text-sm text-neutral-500">مقالة منشورة</div>
          </div>
          <div class="glass-card p-6">
            <i class="fa-solid fa-pen-nib mb-2 block text-2xl leading-none text-orange-500"></i>
            <div class="gradient-text mb-1 text-3xl font-bold">+50</div>
            <div class="text-sm text-neutral-500">كاتب خبير</div>
          </div>
          <div class="glass-card p-6">
            <i class="fa-solid fa-book-open mb-2 block text-2xl leading-none text-orange-500"></i>
            <div class="gradient-text mb-1 text-3xl font-bold">+15</div>
            <div class="text-sm text-neutral-500">تصنيف</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutHero {}
