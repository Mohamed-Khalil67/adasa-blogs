import { Component } from '@angular/core';
import { AUTHORS } from '../../../../data/posts';

@Component({
  selector: 'app-team-section',
  template: `
    <section class="bg-ink py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="section-label mb-4">فريقنا</span>
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">تعرف على كتابنا</h2>
          <p class="mx-auto max-w-2xl text-lg text-neutral-400">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          @for (author of authors; track author.name) {
            <div
              class="group rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:border-orange-500/30"
            >
              <div class="relative mb-4 inline-block">
                <img
                  [src]="author.avatar"
                  [alt]="author.name"
                  width="96"
                  height="96"
                  class="rounded-full object-cover ring-4 ring-line transition-all group-hover:ring-orange-500/30"
                />
                <div
                  class="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full border-2 border-card bg-orange-500"
                >
                  <i class="fa-solid fa-check text-[10px] text-white"></i>
                </div>
              </div>
              <h3 class="text-lg font-bold text-white">{{ author.name }}</h3>
              <p class="mb-4 text-sm font-medium text-orange-500">{{ author.role }}</p>

              <!-- Placeholders: these link nowhere on the original site either -->
              <div class="flex justify-center gap-3">
                <button
                  type="button"
                  aria-label="X (Twitter)"
                  class="flex size-9 cursor-pointer items-center justify-center rounded-lg bg-line text-sm text-neutral-500 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </button>
                <button
                  type="button"
                  aria-label="GitHub"
                  class="flex size-9 cursor-pointer items-center justify-center rounded-lg bg-line text-sm text-neutral-500 transition-colors hover:bg-neutral-700 hover:text-white"
                >
                  <i class="fa-brands fa-github"></i>
                </button>
                <button
                  type="button"
                  aria-label="LinkedIn"
                  class="flex size-9 cursor-pointer items-center justify-center rounded-lg bg-line text-sm text-neutral-500 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TeamSection {
  protected readonly authors = AUTHORS;
}
