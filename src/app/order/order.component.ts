import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, CheckoutService } from '../services/checkout.service';
import { HttpClient } from '@angular/common/http';
import {environment} from '../components/environment';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cartItems: CartItem[] = [];

  constructor(
    private checkoutService: CheckoutService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.checkoutService.getCartItems().subscribe({
      next: (items) => {
        this.cartItems = items;
      },
      error: (err: any) => {
        console.error('Błąd podczas pobierania koszyka', err);
      }
    });
  }

  getTotal(): number {
    const sum = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    return sum + 23;
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  placeOrder(): void {
    const orderPayload = {
      checkoutId: 202
    };

    this.http.post(`${environment.apiUrl}/orders`, orderPayload).subscribe({
      next: () => {
        alert('Zamówienie zostało złożone!');
        this.cartItems = [];
      },
      error: (err: any) => {
        console.error('Błąd przy składaniu zamówienia', err);
        alert('Coś poszło nie tak.');
      }
    });
  }
}
