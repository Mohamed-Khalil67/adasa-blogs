import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
})
export class App {
  constructor() {
    // Keep anchor targets clear of the fixed header when the router scrolls to a fragment.
    inject(ViewportScroller).setOffset([0, 96]);

    // Smoothly scroll to the top when the path changes, but not when only the query
    // params change (the blog's filters and pagination).
    let previousPath = '';
    inject(Router).events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;
      const path = event.urlAfterRedirects.split(/[?#]/)[0];
      const hasFragment = event.urlAfterRedirects.includes('#');
      // Fragment navigations are scrolled to their anchor by the router, so leave them alone.
      if (path !== previousPath && !hasFragment) window.scrollTo({ top: 0, behavior: 'smooth' });
      previousPath = path;
    });
  }
}
