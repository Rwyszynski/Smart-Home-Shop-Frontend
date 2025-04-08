import { Component } from '@angular/core';
import {RegistrationService} from '../services/register/registration-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
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
      next: response => {
        console.log('Rejestracja zakończona sukcesem!', response);
      },
      error: err => {
        console.error('Błąd rejestracji:', err);
      }
    });
  }
}
