import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherstack.com/current?access_key=13571dcff9c892ab30597f70669e9086&query=Warsaw';

  constructor(private http: HttpClient) {}

  getCurrentTemperature(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
