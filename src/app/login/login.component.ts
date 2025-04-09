import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  loginMessage = '';

  constructor(private http: HttpClient) {}

  login() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:8080/v1/users/login', userData).subscribe({
      next: (response) => {
        localStorage.setItem('loggedUser', JSON.stringify(response));
        this.loginMessage = `Zalogowano jako ${response.userName}`;

      },
      error: () => {
        this.loginMessage = 'Nieprawidłowy email lub hasło';
      }
    });

    const user = JSON.parse(localStorage.getItem('loggedUser') || 'null');
    if (user) {
      console.log('Zalogowany:', user.userName);
    }
  }
}
