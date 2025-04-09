import { Component } from '@angular/core';
import {RegistrationService} from '../services/register/registration-service.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = {
    userName: '',
    userSurname: '',
    email: '',
    address: '',
    password: ''
  };
  successMessage: any;

  constructor(private registrationService: RegistrationService) {
  }


  register() {
    this.registrationService.register(this.user).subscribe({
      next: response => {
        this.successMessage = response;

        this.user = {
          userName: '',
          userSurname: '',
          email: '',
          address: '',
          password: ''
        };
      }

    });
  }
}
