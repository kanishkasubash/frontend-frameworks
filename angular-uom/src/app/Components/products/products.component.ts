import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void { 
    this.getProduct();
  }

  rowIndex!: number;
  showAddProduct!: boolean;
  isLoading: boolean = false;
  showEditProduct!: boolean;
  selectedProductId!: number;

  public products: Product[] = [];

  selectProduct(selectedRow: number, selectedId: number) {
    this.rowIndex = selectedRow;
    this.selectedProductId = selectedId;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
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
