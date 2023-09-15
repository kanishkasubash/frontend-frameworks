import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
