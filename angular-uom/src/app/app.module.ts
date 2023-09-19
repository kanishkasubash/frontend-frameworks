import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProductsComponent } from './Components/edit-products/edit-products.component';
import { ViewProductDetailsComponent } from './Components/view-product-details/view-product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { SuppliersComponent } from './Components/suppliers/suppliers.component';
import { AddSuppliersComponent } from './Components/add-suppliers/add-suppliers.component';
import { EditSuppliersComponent } from './Components/edit-suppliers/edit-suppliers.component';
import { ViewSupplierDetailsComponent } from './Components/view-supplier-details/view-supplier-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    EditProductsComponent,
    ViewProductDetailsComponent,
    SuppliersComponent,
    AddSuppliersComponent,
    EditSuppliersComponent,
    ViewSupplierDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
