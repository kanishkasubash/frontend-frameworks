import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Supplier } from 'src/app/Models/supplier.model';
import { SupplierService } from 'src/app/Services/supplier.service';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css']
})
export class EditSuppliersComponent implements OnInit {

  @Input() supplier!: Supplier;
  isDataUploading = false;
  @Output() editSupplierEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelEditEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.cancelEditEvent.emit();
  }

  onSubmit() {
    this.isDataUploading = true;
    this.supplierService.updateSupplier(this.supplier).subscribe((res) => {
      this.isDataUploading = false;
      this.editSupplierEvent.emit();
      this.cancelEditEvent.emit();
    });
  }

}
