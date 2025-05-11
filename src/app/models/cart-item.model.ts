import {Product} from '../services/products.service';

export interface CartItem {
  product: Product;
  quantity: number;
}
