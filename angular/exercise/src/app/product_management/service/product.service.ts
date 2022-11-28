import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';

const URL = environment.apiUrl1;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(URL,product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(URL+'/'+id);
  }

  update(product: Product): Observable<Product> {
   return this.http.put(URL+'/'+product.id, product);
  }

  deleteProduct(index: number): Observable<Product> {
   return this.http.delete<Product>(URL+'/'+index);
  }

}

