// profile.component.ts
import { Component, ElementRef, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private resumeDataService: ResumeDataService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.profile = this.resumeDataService.getResumeData();
  }

  scrollToSection(sectionId: string): void {
    const portfolio = this.elementRef.nativeElement.closest('.portfolio-shell');
    portfolio?.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
