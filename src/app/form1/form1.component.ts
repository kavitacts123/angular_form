import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  booking = {
    name: '',
    email: ''
    // Add more fields here
  };

  submitForm() {
    // Handle form submission here, e.g., send data to backend
    console.log('Form submitted!');
    // Reset form after submission
    this.booking = {
      name: '',
      email: ''
      // Initialize other fields here
    };
  }
}
