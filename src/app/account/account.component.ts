import {Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import {OrderDto, OrderService} from '../services/order/order.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NgFor],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  orders: OrderDto[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}
