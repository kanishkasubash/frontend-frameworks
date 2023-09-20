import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/Models/supplier.model';
import { SupplierService } from 'src/app/Services/supplier.service';

@Component({
  selector: 'app-view-supplier-details',
  templateUrl: './view-supplier-details.component.html',
  styleUrls: ['./view-supplier-details.component.css']
})
export class ViewSupplierDetailsComponent implements OnInit {

  public supplier!: Supplier;

  constructor(private supplierService: SupplierService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let selectedSupplierId = this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplierById(selectedSupplierId).subscribe((res) => {
      this.supplier = res.data;
    });
  }

}
