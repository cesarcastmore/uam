import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public token: string | null = '';

  public is_active: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {

  }


  public login(username: string, password: string): Observable<any> {

    let httpHeaders: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>('https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/login',
      { username, password }, { headers: httpHeaders }).
      pipe(map(resultado => {

        if (resultado.success) {
          localStorage.setItem('token', resultado.token);
          this.token = resultado.token;


        }

        return resultado;

      }));

  }


  public validateToken(): Observable<boolean> {

    let token = localStorage.getItem('token');


    //Consultando un servicio para validar el token

    if (token !== null) {
      this.token = token;
      this.is_active.next(true);
      return of(true);
    } else {
      this.is_active.next(false);
      this.token = null;
      return of(false);

    }









  }
}
