import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name?: string;
  title?: string;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.name = data.name;
    this.title = data.title;
  }
}