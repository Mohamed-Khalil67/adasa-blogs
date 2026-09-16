import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-cta',
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 py-20">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-10 right-10 size-64 rounded-full bg-white/20 blur-[100px]"></div>
        <div class="absolute bottom-10 left-10 size-48 rounded-full bg-white/20 blur-[80px]"></div>
      </div>

      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">لديك أسئلة؟ دعنا نتحدث!</h2>
        <p class="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في
          التواصل.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            [href]="'mailto:' + email()"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-900"
          >
            <i class="fa-regular fa-envelope"></i>
            تواصل معنا
          </a>
          <a
            routerLink="/blog"
            class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-ink"
          >
            <i class="fa-solid fa-book-open"></i>
            تصفح المقالات
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ContactCta {
  readonly email = input.required<string>();
}
