import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_STATS } from '../../../../data/site';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, StatCard],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly siteName = input.required<string>();
  protected readonly stats = HOME_STATS;
}
