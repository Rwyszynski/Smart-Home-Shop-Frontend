import { Component } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { WeatherService } from '../services/weather.service';
import { DecimalPipe, CommonModule } from '@angular/common'; // <- dodaj CommonModule

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [
    CommonModule,
    DecimalPipe
  ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  euroRate: number | null = null;
  temperature: number | null = null;

  constructor(
    private exchangeRateService: ExchangeRateService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.exchangeRateService.getEuroExchangeRate().subscribe((data) => {
      this.euroRate = data.rates[0].mid;
    });

    this.weatherService.getCurrentTemperature().subscribe((data) => {
      this.temperature = data.current.temperature;
    });
  }
}
