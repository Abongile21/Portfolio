import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  darkMode: boolean = false;

  constructor(
    private router: Router,
    private gaService: GoogleAnalyticsService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.gaService.pageView(event.urlAfterRedirects);
      }
    });
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
