import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Logo } from '../../shared/components/logo/logo';
import { SearchFocusService } from '../../shared/services/search-focus.service';
import { MobileMenu } from './mobile-menu/mobile-menu';
import { NavLinks } from './nav-links/nav-links';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo, NavLinks, MobileMenu],
  templateUrl: './header.html',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Header {
  private readonly router = inject(Router);
  private readonly searchFocus = inject(SearchFocusService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
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

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  /** Opens the blog and focuses its search box. */
  protected openSearch(): void {
    this.searchFocus.request();
    void this.router.navigate(['/blog']);
  }
}
