import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { SearchFocusService } from '../../shared/services/search-focus.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Header {
  private readonly router = inject(Router);
  private readonly searchFocus = inject(SearchFocusService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    // Close the mobile menu after navigating.
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  /** Opens the blog and focuses its search box. */
  protected openSearch(): void {
    this.searchFocus.request();
    void this.router.navigate(['/blog']);
  }
}
