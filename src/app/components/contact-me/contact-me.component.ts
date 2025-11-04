import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: false,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  showModal = false;


  constructor(private http: HttpClient) {}

  submitForm(form: NgForm): void {
    if (form.valid) {
      const url = 'https://getform.io/f/YOUR_GETFORM_ENDPOINT';
      const formData = form.value;

      this.http.post(url, formData, { responseType: 'text' }).subscribe({
        next: () => {
          this.showModal = true; // Show success modal
          form.reset(); // Reset the form
        },
        error: (err) => {
          console.error('Error submitting form:', err);
          alert('Something went wrong. Please try again later.');
        }
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
  }
}
