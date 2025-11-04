// education.component.ts
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.education = this.resumeDataService.getResumeData().education;
  }
}
