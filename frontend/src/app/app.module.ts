import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantComponent } from './views/restaurant/restaurant.component';
import { ContactComponent } from './views/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { DisheComponent } from './components/dishe/dishe.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    RestaurantComponent,
    ContactComponent,
    MenuComponent,
    DisheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
