import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { LegalPage } from './legal-page';

@Component({
  selector: 'app-legal',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './legal.html',
})
export class Legal {
  private readonly route = inject(ActivatedRoute);

  /** The active child's `page` route data: privacy and terms share this chrome. */
  protected readonly page = toSignal(
    inject(Router).events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.route.snapshot.firstChild?.data['page'] as LegalPage),
    ),
    { requireSync: true },
  );
}
