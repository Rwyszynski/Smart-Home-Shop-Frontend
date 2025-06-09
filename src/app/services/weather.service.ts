import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/api/weather/temperature';

  constructor(private http: HttpClient) {}

  getCurrentTemperature(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }
}
