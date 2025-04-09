import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/v1/users';

  constructor(private http: HttpClient) {
  }

  register(user: any): Observable<string> {
    return this.http.post('http://localhost:8080/v1/users', user, {
      responseType: 'text' as const
    });
  }
}
