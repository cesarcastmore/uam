import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }


  public login(username: string, password: string): Observable<any> {

    let httpHeaders: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>('https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/login',
      { username, password }, { headers: httpHeaders }).
      pipe(map(resultado => {

        if (resultado.success) {
          sessionStorage.setItem('token', resultado.token);
          //localStorage.setItem('token', resultado.token);
        }

        return resultado;

      }));

  }
}
