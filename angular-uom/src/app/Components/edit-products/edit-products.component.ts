import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  @Input() product!: Product;
  isDataUploading = false;
  @Output() editProductEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelEditEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.cancelEditEvent.emit();
  }

  onSubmit() {
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe((res) => {
      this.isDataUploading = false;
      this.editProductEvent.emit();
      this.cancelEditEvent.emit();
    });
  }

}
