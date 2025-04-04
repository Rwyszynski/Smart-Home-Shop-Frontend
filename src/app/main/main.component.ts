import { Component } from '@angular/core';
import {ProductListComponent} from '../components/product-list/product-list.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    ProductListComponent
  ],
  styleUrl: './main.component.css'
})
export class MainComponent {


}
