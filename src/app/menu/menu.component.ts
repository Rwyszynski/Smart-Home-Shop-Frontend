import { Component } from '@angular/core';
import {ExchangeRateService} from '../services/exchange-rate.service';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    DecimalPipe
  ],
  styleUrls: ['./menu.component.css']

})
export class MenuComponent {

  euroRate: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {

    this.exchangeRateService.getEuroExchangeRate().subscribe((data) => {
      this.euroRate = data.rates[0].mid;
    });
  }
}
