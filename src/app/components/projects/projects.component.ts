import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  projects: any[] = [];

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.projects= data.projects;
  }
}

