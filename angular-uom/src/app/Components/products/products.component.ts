import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { ViewProductDetailsComponent } from '../view-product-details/view-product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  
  rowIndex!: number;
  showAddProduct!: boolean;
  isLoading: boolean = false;
  showEditProduct!: boolean;
  selectedProduct!: Product;
  message!: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void { 
    this.getProduct();    
  }

  ngAfterViewInit(){

  }

  public products: Product[] = [];

  selectProduct(selectedRow: number, product: Product) {
    this.rowIndex = selectedRow;
    this.selectedProduct = product;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  closeAddProducts() {
    this.showAddProduct = false;
  }

  showEditProducts() {
    this.showEditProduct = true;
  }

  getProduct() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    })
  }

  updateProductList(){
    this.getProduct();
  }

  closeEditView(){
    this.showEditProduct = false;
  }

  refresh(){
    this.getProduct();
  }

}
