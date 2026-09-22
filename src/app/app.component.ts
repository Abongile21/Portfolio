import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  darkMode = true;

  constructor(
    private router: Router,
    private gaService: GoogleAnalyticsService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.includes('#')
          ? event.urlAfterRedirects.split('#')[1]
          : event.urlAfterRedirects;

        console.log('GA Tracking:', path); //Log track
        this.gaService.pageView(path);
      }
    });
  }

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('portfolio-theme');
    this.darkMode = storedTheme
      ? storedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.dataset['theme'] = this.darkMode ? 'dark' : 'light';
  }
}
