// src/app/services/order.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface OrderDto {
  orderId: number;
  userId: number;
  orderStatus: string;
  orderDate: string;
  orderedItems: any[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/v1/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(this.apiUrl);
  }
}
