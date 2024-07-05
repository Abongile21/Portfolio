import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private audio: HTMLAudioElement;
  private activeLink: HTMLElement | null = null;

  constructor(private router: Router) {
    
    this.audio = new Audio('assets/sound1.mp3');
    this.audio.volume = 0.01
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  scrollToElement(elementId: string, event: MouseEvent): void {
    this.playSound();
    this.setActiveLink(event);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setActiveLink(event: MouseEvent): void {
    if (this.activeLink) {
      this.activeLink.classList.remove('active-link');
    }
    const target = event.target as HTMLElement;
    target.classList.add('active-link');
    this.activeLink = target;
  }

  private playSound(): void {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
