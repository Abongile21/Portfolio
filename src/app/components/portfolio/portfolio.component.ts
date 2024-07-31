import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('hamburger') hamburger!: ElementRef;

  private audio: HTMLAudioElement;
  isMenuOpen = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.audio = new Audio('assets/sound1.mp3');
    this.audio.volume = 0.04;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
      this.closeMenu();
    });
  }

  scrollToElement(elementId: string): void {
    this.playSound();
    const element = this.el.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(this.navLinks.nativeElement, 'active');
      this.renderer.addClass(this.hamburger.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.navLinks.nativeElement, 'active');
      this.renderer.removeClass(this.hamburger.nativeElement, 'active');
    }
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.renderer.removeClass(this.navLinks.nativeElement, 'active');
      this.renderer.removeClass(this.hamburger.nativeElement, 'active');
    }
  }

  private playSound(): void {
    this.audio.currentTime = 0;
    this.audio.play().catch(error => console.error('Audio playback failed', error));
  }
}