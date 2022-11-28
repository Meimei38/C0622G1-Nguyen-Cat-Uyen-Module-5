import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL);
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(API_URL, category);
  }

  findById(index: number): Observable<Category> {
    return this.http.get<Category>(API_URL + '/' + index);
  }

  updateCategory(index: number, category: Category): Observable<Category> {
    return this.http.put<Category>(API_URL +'/'+index, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(API_URL+'/'+id);
  }
}
