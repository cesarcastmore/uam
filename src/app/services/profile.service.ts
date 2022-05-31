import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http: HttpClient) {

   }


   public getProfile(): Observable<any> {
     return this.http.get<any>('https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/profile');
   }
}
