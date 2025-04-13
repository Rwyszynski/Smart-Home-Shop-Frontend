import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';

interface Product {
  componentlist_id: number;
  brand: string;
  model: string;
  price: number;
  url: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  imports: [CommonModule],
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCartItems();
  }

  fetchCartItems(): void {
    this.http.get<CartItem[]>('http://localhost:8080/v1/checkouts').subscribe({
      next: (data) => {
        this.cartItems = data;
      },
      error: (err) => {
        console.error('Błąd podczas pobierania koszyka:', err);
      }
    });
  }

  getTotal(): number {
    const delivery = 23;
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + delivery;
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    // Można też dodać zapytanie HTTP do backendu usuwające produkt z koszyka
  }

  placeOrder(): void {
    this.http.post('http://localhost:8080/v1/orders', {}).subscribe({
      next: () => {
        alert('Zamówienie złożone!');
        this.cartItems = [];
      },
      error: (err) => {
        console.error('Błąd przy składaniu zamówienia:', err);
        alert('Nie udało się złożyć zamówienia');
      }
    });
  }
}
