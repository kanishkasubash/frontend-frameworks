import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  @Input() productId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
