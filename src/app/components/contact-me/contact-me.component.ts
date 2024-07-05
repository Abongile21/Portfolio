import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  showModal: boolean = false;

  submitForm(form: NgForm) {
    // You can handle the actual form submission logic here if needed
    setTimeout(() => {
      this.showModal = true;
      form.resetForm();
    }, 1000);
  }

  closeModal() {
    this.showModal = false;
  }
}
