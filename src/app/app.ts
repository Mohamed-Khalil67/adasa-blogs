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
    // Smoothly scroll to the top when the path changes, but not when only the query
    // params change (the blog's filters and pagination).
    let previousPath = '';
    inject(Router).events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;
      const path = event.urlAfterRedirects.split(/[?#]/)[0];
      if (path !== previousPath) window.scrollTo({ top: 0, behavior: 'smooth' });
      previousPath = path;
    });
  }
}
