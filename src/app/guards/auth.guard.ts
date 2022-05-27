import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {


  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      console.log("entrooo");
    return this.authService.validateToken().pipe(
      tap((value: boolean)=>{

        if(!value){
          this.router.navigate(['/login']);
        }
      
    }));
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.validateToken().pipe(
      tap((value: boolean)=>{

        if(!value){
          this.router.navigate(['/login']);
        }
      
    }));
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.authService.validateToken().pipe(
      tap((value: boolean)=>{

        if(!value){
          this.router.navigate(['/login']);
        }
      
    }));
  }
}
