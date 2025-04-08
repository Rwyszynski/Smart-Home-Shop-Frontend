import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AccountComponent } from './account/account.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BucketComponent} from './bucket/bucket.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'account', component: AccountComponent},
      {path: 'bucket', component: BucketComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]),
    AppComponent,
    ProductListComponent,
    AccountComponent,
    MenuComponent,
    SidebarComponent,
    BucketComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
