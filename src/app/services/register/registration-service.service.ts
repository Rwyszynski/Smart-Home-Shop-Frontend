import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/v1/users';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(this.baseUrl, userData);
  }
}
