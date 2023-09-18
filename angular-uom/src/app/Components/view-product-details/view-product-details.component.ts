import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {

  childMessage: string = "Message From Child";

  constructor() { }

  ngOnInit(): void {
  }

}
