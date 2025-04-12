import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  private apiUrl = 'https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json';

  constructor(private http: HttpClient) {}

  // Metoda pobierająca kurs Euro
  getEuroExchangeRate(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
