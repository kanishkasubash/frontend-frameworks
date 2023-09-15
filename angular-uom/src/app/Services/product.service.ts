import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { AddProductResponse } from '../Models/add-product-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://host1.open.uom.lk:8000/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
      product,
      this.httpOptions
    );
  }
}
