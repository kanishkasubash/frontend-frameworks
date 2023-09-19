import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SupplierService } from '../../Services/supplier.service';
import { Supplier } from 'src/app/Models/supplier.model';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.css'],
})
export class AddSuppliersComponent implements OnInit {

  supplierFrom = this.fb.group({
    supplierName: ['', Validators.required],
    address: ['', Validators.required],
    joinedDate: ['', Validators.required],
    mobileNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
  });

  isDataUploading = false;

  @Output() supplierAddEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelAddView: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    const values = this.supplierFrom.value as Supplier;
    this.isDataUploading = true;
    this.supplierService.addSupplier(values as Supplier).subscribe((res) => {
      this.supplierAddEvent.emit();
      this.isDataUploading = false;
      this.supplierFrom.reset();
    });
  }

  get f() {
    return this.supplierFrom.controls;
  }

  cancel() {
    this.cancelAddView.emit();
  }
}
