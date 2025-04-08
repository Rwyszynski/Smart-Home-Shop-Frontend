import { Component } from '@angular/core';
import {RegistrationService} from './registration-service.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule]
})
export class RegisterComponent {
  user = {
    name: '',
    surname: '',
    email: '',
    address: '',
    password: ''
  };

  constructor(private registrationService: RegistrationService) {}

  register() {
    this.registrationService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Add logic like navigation or showing a success message
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Handle errors (e.g., show error message to user)
      }
    });
  }
}
