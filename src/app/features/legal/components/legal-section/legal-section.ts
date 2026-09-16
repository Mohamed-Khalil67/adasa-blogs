import { Component, input } from '@angular/core';
import { LegalSection as LegalSectionModel } from '../../../../data/models';
import { SITE } from '../../../../data/site';

@Component({
  selector: 'app-legal-section',
  host: { class: 'block' },
  template: `
    <section>
      <h2 class="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
        <span
          class="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-yellow-500 text-sm font-bold text-white"
        >
          {{ index() }}
        </span>
        {{ section().title }}
      </h2>

      <div class="pr-11">
        @for (paragraph of section().paragraphs; track $index; let last = $last) {
          <p class="leading-relaxed text-neutral-400" [class.mb-4]="!last || section().list || section().showEmail">
            {{ paragraph }}
          </p>
        }

        @if (section().listIntro) {
          <p class="mb-3 font-medium text-neutral-300">{{ section().listIntro }}</p>
        }

        @if (section().list; as list) {
          <ul [class]="section().listIntro ? 'space-y-2' : 'space-y-3'">
            @for (item of list; track $index) {
              <li class="flex items-start gap-3 text-neutral-400">
                <i class="fa-regular fa-circle-check mt-0.5 size-5 shrink-0 text-center text-lg leading-5 text-orange-500"></i>
                <span>
                  @if (item.label) {
                    <strong class="text-white">{{ item.label }}:</strong>
                  }
                  {{ item.text }}
                </span>
              </li>
            }
          </ul>
        }

        @if (section().showEmail) {
          <a
            [href]="'mailto:' + email"
            class="inline-flex items-center gap-2 font-medium text-orange-500 hover:text-orange-400"
          >
            <i class="fa-regular fa-envelope size-5 text-center text-lg leading-5"></i>
            {{ email }}
          </a>
        }
      </div>
    </section>
  `,
})
export class LegalSection {
  readonly section = input.required<LegalSectionModel>();
  readonly index = input.required<number>();
  protected readonly email = SITE.email;
}
