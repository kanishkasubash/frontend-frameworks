import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { AddProductResponse } from '../Models/add-product-response.model';
import { ProductResponse } from '../Models/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://host1.open.uom.lk/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      `${this.baseUrl}api/products`,
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseUrl}api/products`);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/products', product);
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/products/${id}`);
  }
}
