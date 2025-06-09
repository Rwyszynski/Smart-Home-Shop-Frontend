import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../components/environment';
import {CartItem} from '../models/cart-item.model';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutUrl = `${environment.apiUrl}/checkouts`;
  private checkoutId: number | null = null;

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.checkoutUrl);
  }

  setCheckoutId(id: number): void {
    this.checkoutId = id;
  }

  getCheckoutId(): number | null {
    return this.checkoutId;
  }
}
