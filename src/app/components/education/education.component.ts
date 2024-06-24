import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

interface Education {
  school: string;
  degree: string;
  period: string;
  status?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education?: Education[];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.education = data.education;
  }
}