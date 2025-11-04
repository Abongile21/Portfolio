import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profile ?: string;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.profile = data.profile;
  }
}