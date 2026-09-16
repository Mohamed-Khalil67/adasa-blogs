import { Component } from '@angular/core';
import { PanelTitle } from '../panel-title/panel-title';

/** Visual only: the buttons have hover styles but no action, as on the original site. */
@Component({
  selector: 'app-share-buttons',
  imports: [PanelTitle],
  template: `
    <div class="mt-6 rounded-2xl border border-line bg-surface p-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <app-panel-title icon="fa-share-nodes" title="شارك المقال" />
        <div class="flex gap-2">
          @for (network of networks; track network.label) {
            <button
              type="button"
              [attr.aria-label]="network.label"
              class="flex size-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-elevated text-neutral-400 transition-all duration-300 hover:border-transparent hover:text-white"
              [class]="network.hover"
            >
              <i [class]="network.icon"></i>
            </button>
          }
        </div>
      </div>
    </div>
  `,
})
export class ShareButtons {
  protected readonly networks = [
    { label: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', hover: 'hover:bg-[#1da1f2]' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', hover: 'hover:bg-[#0077b5]' },
    { label: 'WhatsApp', icon: 'fa-brands fa-whatsapp', hover: 'hover:bg-[#25d366]' },
    { label: 'نسخ الرابط', icon: 'fa-solid fa-link', hover: 'hover:bg-orange-500' },
  ];
}
