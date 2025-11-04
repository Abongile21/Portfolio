// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.profile = this.resumeDataService.getResumeData();
  }
}
