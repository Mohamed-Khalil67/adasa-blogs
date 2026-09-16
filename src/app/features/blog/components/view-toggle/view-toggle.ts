import { Component, input, output } from '@angular/core';
import { PostLayout } from '../../../../data/models';

@Component({
  selector: 'app-view-toggle',
  template: `
    <div class="flex items-center rounded-xl border border-line bg-card p-1" role="group" aria-label="طريقة العرض">
      @for (option of options; track option.value) {
        <button
          type="button"
          [attr.aria-label]="option.label"
          [attr.aria-pressed]="layout() === option.value"
          (click)="layoutChange.emit(option.value)"
          class="cursor-pointer rounded-lg p-2 transition-all duration-300"
          [class]="layout() === option.value ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'"
        >
          <i class="fa-solid {{ option.icon }} block size-5 text-base leading-5"></i>
        </button>
      }
    </div>
  `,
})
export class ViewToggle {
  readonly layout = input.required<PostLayout>();
  readonly layoutChange = output<PostLayout>();

  protected readonly options: { value: PostLayout; icon: string; label: string }[] = [
    { value: 'grid', icon: 'fa-table-cells-large', label: 'عرض شبكي' },
    { value: 'list', icon: 'fa-list', label: 'عرض قائمة' },
  ];
}
