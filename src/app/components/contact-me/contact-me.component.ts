import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  showModal = false;

  submitForm(form: any): void {
    if (form.valid) {
      this.showModal = true;
      form.reset();
    }
  }

  closeModal(): void {
    this.showModal = false;
  }
}