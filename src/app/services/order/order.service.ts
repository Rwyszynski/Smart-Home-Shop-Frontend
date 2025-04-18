import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderDto {
  userId: number;
  productListId: number;
  orderStatus: string;
  orderDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '/v1/orders';

  constructor(private http: HttpClient) {}

  placeOrder(order: OrderDto): Observable<void> {
    return this.http.post<void>(this.apiUrl, order);
  }
}
