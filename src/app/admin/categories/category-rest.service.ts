import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryRestService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost/laravelAngularApi/public/api/categories');
  }
  
  editCategory(id): Observable<any> {
    return this.http.get('http://localhost/laravelAngularApi/public/api/categories/' + id);
  }

  updateCategory(form,id): Observable<any> {
    return this.http.put('http://localhost/laravelAngularApi/public/api/categories/' + id, form.value);
  }

  storeCategory(form): Observable<any> {
    return this.http.post('http://localhost/laravelAngularApi/public/api/categories',form.value);
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete('http://localhost/laravelAngularApi/public/api/categories/' + id);
  }
}
