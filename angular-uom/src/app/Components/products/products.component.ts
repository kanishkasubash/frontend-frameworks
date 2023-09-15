import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  rowIndex!: number;
  showAddProduct!: boolean;

  public products = [{
    'productId': "001",
    'productName': "White Basmathi Rice",
    'createdDate': "Jan 29, 2020",
    'quantity': 100,
    'unitPrice': 400,
    'productDescription': "White Basmathi Rice imported from pakistan"
  },
  {
    'productId': "002",
    'productName': "Flour",
    'createdDate': "Jan 29, 2020",
    'quantity': 50,
    'unitPrice': 190,
    'productDescription': "Super Fine Whole grain general Purpose flour"
  },
  {
    'productId': "003",
    'productName': "sugar",
    'createdDate': "Jan 29, 2020",
    'quantity': 1200,
    'unitPrice': 200,
    'productDescription': "White sugar manufactured by Palwatte Factory"
  },
  {
    'productId': "004",
    'productName': "Dhal",
    'createdDate': "Jan 29, 2020",
    'quantity': 10,
    'unitPrice': 200,
    'productDescription': "Imported mysoor dhal from India"
  }
  ]

  selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

}
