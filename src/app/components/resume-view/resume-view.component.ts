import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {
  pdfSrc = 'assets/resume.pdf'; // Path to your PDF file in assets
  zoom = 1.0;

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  zoomIn() {
    this.zoom += 0.1;
  }

  zoomOut() {
    this.zoom -= 0.1;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'resume.pdf';
    link.click();
  }
}
