import { Component } from '@angular/core';

import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {OrderComponent} from './order/order.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    SidebarComponent,
    RouterOutlet,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
        throw new Error('Method not implemented.');
    }
}
