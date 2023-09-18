import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../Models/product.model';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  @Output() productAddEvent: EventEmitter<void> = new EventEmitter<void>();

  isDataUploading = false;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
    batchNumber: ['', Validators.required],
    manufactureName: ['', Validators.required],
    daysToDeliver: ['', [Validators.required, Validators.max(10)]],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
  });

  ngOnInit(): void { }

  get f() {
    return this.productFrom.controls;
  }

  onSubmit() {
    const values = this.productFrom.value as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) => {
      this.productAddEvent.emit();
      this.isDataUploading = false;
      this.productFrom.reset();
    });
  }
}
