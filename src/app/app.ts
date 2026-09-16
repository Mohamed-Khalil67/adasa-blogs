import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    // Smoothly scroll to the top when the path changes, but not when only
    // the query params change (blog filters and pagination).
    let previousPath = '';
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event.urlAfterRedirects.split(/[?#]/)[0]),
        takeUntilDestroyed(),
      )
      .subscribe((path) => {
        if (path !== previousPath) window.scrollTo({ top: 0, behavior: 'smooth' });
        previousPath = path;
      });
  }
}
