import { Component } from '@angular/core';

import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenuComponent} from './menu/menu.component';
import {ProductListComponent} from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    SidebarComponent,
    RouterOutlet,
    ProductListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
