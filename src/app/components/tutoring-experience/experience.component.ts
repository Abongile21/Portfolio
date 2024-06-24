import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';
interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience?: Experience[];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.experience = data.experience;
  }
}