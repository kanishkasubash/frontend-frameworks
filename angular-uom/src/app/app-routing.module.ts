import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductDetailsComponent } from './Components/view-product-details/view-product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { SuppliersComponent } from './Components/suppliers/suppliers.component';
import { ViewSupplierDetailsComponent } from './Components/view-supplier-details/view-supplier-details.component';

const routes: Routes = [
  {path : '' , component: ProductsComponent},
  {path : 'products' , component: ProductsComponent},
  {path : 'product-detail-view/:id' , component: ViewProductDetailsComponent},
  {path : 'suppliers' , component: SuppliersComponent},
  {path : 'supplier-detail-view/:id' , component: ViewSupplierDetailsComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
