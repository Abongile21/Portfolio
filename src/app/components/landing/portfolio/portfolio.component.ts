import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('hamburger') hamburger!: ElementRef;

  private audio: HTMLAudioElement;
  private sectionObserver?: IntersectionObserver;
  isMenuOpen = false;
  activeSection = 'profile';

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
      this.activeSection = 'profile';
      this.closeMenu();
    });
  }

  ngAfterViewInit(): void {
    this.sectionObserver = new IntersectionObserver(
      entries => {
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          this.activeSection = (visibleSection.target as HTMLElement).id;
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    this.el.nativeElement
      .querySelectorAll('.portfolio-section')
      .forEach((section: Element) => this.sectionObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  scrollToElement(elementId: string): void {
    this.playSound();
    this.activeSection = elementId;
    const element = this.el.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      if (this.navLinks?.nativeElement) {
        this.renderer.addClass(this.navLinks.nativeElement, 'active');
      }
      if (this.hamburger?.nativeElement) {
        this.renderer.addClass(this.hamburger.nativeElement, 'active');
      }
    } else {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    if (this.navLinks?.nativeElement) {
      this.renderer.removeClass(this.navLinks.nativeElement, 'active');
    }
    if (this.hamburger?.nativeElement) {
      this.renderer.removeClass(this.hamburger.nativeElement, 'active');
    }
  }

  playSound(): void {
    this.audio.play();
  }
}
