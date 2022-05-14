import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { 


  }

  public getProductsByCategoryId(categoryId: string): Observable<any> {

    let params: HttpParams = new HttpParams().append('api_key', environment.apiKey)
      .append('store_key', environment.apiStoreKey).append('start', 0).append('count', 100)
      .append('category_id', categoryId);


   return this.http.get<any>(environment.url + "/product.list.json", { params })

  }
}
