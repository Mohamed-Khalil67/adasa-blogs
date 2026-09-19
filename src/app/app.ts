import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    // Scrolling to the top on navigation is handled by withInMemoryScrolling in app.config.ts.
    inject(ViewportScroller).setOffset([0, 96]);
  }
}
