import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './main.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainComponent,
    MainComponent,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
