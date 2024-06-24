import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';
interface Contact {
  phone: string;
  email: string;
  address: string;
  github: string;
  linkedin: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact ?: Contact;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    this.contact = data.contact;
  }
}