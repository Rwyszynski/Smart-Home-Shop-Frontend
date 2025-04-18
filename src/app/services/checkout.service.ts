import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../components/environment';

export interface Product {
  brand: string;
  model: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutUrl = `${environment.apiUrl}/checkouts`;
  private orderUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.checkoutUrl);
  }

  createOrder(orderPayload: any): Observable<any> {
    return this.http.post(this.orderUrl, orderPayload);
  }
}
