import { Component, input } from '@angular/core';

/**
 * Visual-only signup form: like the original site it doesn't subscribe anyone.
 * Submitting is swallowed so the page doesn't reload.
 */
@Component({
  selector: 'app-newsletter-form',
  template: `
    @if (variant() === 'hero') {
      <form class="mx-auto mb-6 flex max-w-lg flex-col gap-3 sm:flex-row" (submit)="$event.preventDefault()">
        <label class="sr-only" for="newsletter-hero">البريد الإلكتروني</label>
        <input
          id="newsletter-hero"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          class="flex-1 rounded-xl border border-line bg-ink px-5 py-4 text-white placeholder-neutral-500 transition-colors focus:border-orange-500/50 focus:outline-none"
        />
        <button
          type="submit"
          class="cursor-pointer rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
        >
          {{ buttonLabel() }}
        </button>
      </form>
    } @else {
      <form class="space-y-3" (submit)="$event.preventDefault()">
        <label class="sr-only" for="newsletter-compact">البريد الإلكتروني</label>
        <input
          id="newsletter-compact"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          class="w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all duration-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
        />
        <button type="submit" class="btn-primary w-full text-sm">{{ buttonLabel() }}</button>
      </form>
    }
  `,
})
export class NewsletterForm {
  readonly variant = input<'hero' | 'compact'>('hero');
  readonly buttonLabel = input('اشترك الآن');
}
