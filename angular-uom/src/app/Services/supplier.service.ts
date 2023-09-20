import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../Models/supplier.model';
import { AddSupplierResponse } from '../Models/add-supplier-response.model';
import { SupplierResponse } from '../Models/supplier-response.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = 'https://host1.open.uom.lk/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addSupplier(supplier: Supplier): Observable<AddSupplierResponse> {
    return this.http.post<AddSupplierResponse>(
      `${this.baseUrl}api/supplier`,
      supplier,
      this.httpOptions
    );
  }

  getSuppliers(): Observable<SupplierResponse> {
    return this.http.get<SupplierResponse>(`${this.baseUrl}api/suppliers`);
  }

  updateSupplier(supplier: Supplier): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/suppliers', supplier);
  }

  getSupplierById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/suppliers/${id}`);
  }
}
