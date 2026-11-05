// education.component.ts
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

interface Education {
  school: string;
  degree: string;
  period: string;
  status?: string;
  details?: string[];
}

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.education = this.resumeDataService.getResumeData().education;
  }
}
