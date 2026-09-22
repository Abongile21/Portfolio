import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-view',
  standalone: false,
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {
  private readonly pdfUrl = 'assets/Resume_ANyakatya.pdf';
  readonly pdfSrc: SafeResourceUrl;
  zoom = 1.0;

  readonly minZoom = 0.6;
  readonly maxZoom = 2.2;
  readonly zoomStep = 0.1;

  isFullscreen = false;
  zoomDisplay = '100%';

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  ngOnInit(): void {
    this.updateZoomDisplay();
  }

  zoomIn(): void {
    if (this.zoom < this.maxZoom) {
      this.zoom = parseFloat((this.zoom + this.zoomStep).toFixed(1));
      this.updateZoomDisplay();
    }
  }

  zoomOut(): void {
    if (this.zoom > this.minZoom) {
      this.zoom = parseFloat((this.zoom - this.zoomStep).toFixed(1));
      this.updateZoomDisplay();
    }
  }

  onZoomChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.zoom = parseFloat(value);
    this.updateZoomDisplay();
  }

  private updateZoomDisplay(): void {
    this.zoomDisplay = `${Math.round(this.zoom * 100)}%`;
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'Theo_Nyakatya_Resume.pdf';
    link.click();
  }

  goBack(): void {
    this.router.navigate(['/portfolio']);
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
    const elem = document.documentElement;
    if (this.isFullscreen) {
      if (elem.requestFullscreen) elem.requestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  // Smooth reset zoom shortcut
  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (event.ctrlKey && event.key === '0') {
      this.zoom = 1.0;
      this.updateZoomDisplay();
      event.preventDefault();
    }
  }
}
