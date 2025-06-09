import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutService } from '../services/checkout.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth-service.service';
import { CartItem } from '../checkout/checkout.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cartItems: CartItem[] = [];
  isLoading: boolean = false;

  constructor(
    private checkoutService: CheckoutService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkoutService.getCartItems().subscribe({
      next: (items) => {
        this.cartItems = items;
      },
      error: (err: any) => {
        console.error('Błąd podczas pobierania koszyka', err);
        alert('Nie udało się pobrać zawartości koszyka.');
      }
    });
  }

  getTotal(): number {
    const sum = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    return sum + this.getDeliveryCost();
  }

  getDeliveryCost(): number {
    return 23;
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  placeOrder(): void {
    const userId = this.authService.getUserId();
    if (!userId) {
      alert('Musisz być zalogowany, aby złożyć zamówienie.');
      return;
    }

    this.isLoading = true;

    const url = `http://localhost:8080/v1/orders/fromCheckout/${userId}`;
    console.log('Wysyłam zapytanie POST do:', url);

    this.http.post(url, {}).subscribe({
      next: (response) => {
        alert('Zamówienie zostało złożone!');
        this.cartItems = [];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Błąd przy składaniu zamówienia', err);
        alert('Coś poszło nie tak przy składaniu zamówienia.');
        this.isLoading = false;
      }
    });
  }
}
