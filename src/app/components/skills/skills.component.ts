import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills?: string[];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.skills = data.techSkills;
  }
}