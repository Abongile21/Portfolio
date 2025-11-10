import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: false,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  showModal = false;
  isSubmitting = false;
  
  constructor(private http: HttpClient) {}
  
  submitForm(form: NgForm): void {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const url = 'https://formspree.io/f/xdknopkz';
      const formData = form.value;
      
      // Set headers to ensure proper content type
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      
      console.log('Submitting to:', url);
      console.log('Form data:', formData);
      
      this.http.post(url, formData, { headers }).subscribe({
        next: (response) => {
          console.log('Success response:', response);
          this.showModal = true; // Show success modal
          form.reset(); // Reset the form
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Error submitting form:', err);
          console.error('Error status:', err.status);
          console.error('Error message:', err.message);
          alert('Something went wrong. Please try again later.');
          this.isSubmitting = false;
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    } else if (!form.valid) {
      console.warn('Form is invalid:', form.errors);
      // Mark all fields as touched to show validation errors
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }
  
  closeModal(): void {
    this.showModal = false;
  }
}
