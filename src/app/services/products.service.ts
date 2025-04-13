import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  componentlist_id: any;
  component_id: number;
  brand: string;
  model: string;
  voltage: number;
  power: number;
  protocol: string;
  current: number;
  price: number;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
