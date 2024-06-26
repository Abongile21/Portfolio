// contact-me.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      message: this.contactForm.message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error: any) => {
        console.error('FAILED...', error);
      });
  }
}
