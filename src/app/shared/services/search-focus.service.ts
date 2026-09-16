import { Injectable, signal } from '@angular/core';

/**
 * Lets the header search button ask the blog search box to take focus,
 * whether the blog page is already open or is about to be opened.
 */
@Injectable({ providedIn: 'root' })
export class SearchFocusService {
  private readonly requested = signal(false);
  readonly pending = this.requested.asReadonly();

  request(): void {
    this.requested.set(true);
  }

  consume(): void {
    this.requested.set(false);
  }
}
