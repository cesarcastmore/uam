import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: Subject<any> = new Subject();

  constructor() {

   }


   notify(type: string | null, message: string){
     this.alert.next({
       type: type, 
       message: message
     });

     /*setTimeout(() => {
      this.alert.next({
        type: null, 
        message: ''
      });

     }, 2000)*/

   }
}
