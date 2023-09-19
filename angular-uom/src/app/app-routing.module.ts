import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductDetailsComponent } from './Components/view-product-details/view-product-details.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path : 'products' , component: ProductsComponent},
  {path : 'product-detail-view/:id' , component: ViewProductDetailsComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
