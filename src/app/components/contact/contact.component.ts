// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.contact = this.resumeDataService.getResumeData().contact;
  }
}
