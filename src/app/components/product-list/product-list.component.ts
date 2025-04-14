import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../services/products.service';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule],
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private http: HttpClient) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    console.log('Produkt dodawany do koszyka:', product);
    this.http.post<any>(
      `http://localhost:8080/v1/checkouts/fromProduct/${product.component_id}`,
      {}
    ).subscribe({
      next: (checkout) => {
        alert('Produkt dodany do koszyka!');
      },
      error: (err) => {
        console.error('Błąd przy dodawaniu do koszyka:', err);
        alert('Nie udało się dodać produktu do koszyka');
      }
    });
  }
}
