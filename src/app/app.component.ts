import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu';
import { AlertService} from 'src/app/services/alert.service';
import { Observable } from 'rxjs';
import {tap, distinctUntilChanged, distinctUntilKeyChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'uam';

  isOpen: boolean = true;

  alert$:Observable<any> | undefined;



  public menus: Menu[] = [
    {
      title: 'Modulos',
      key: 'modulos',
      children: [{
        title: 'Componente del modulo raiz',
        path: 'componente-raiz'
      }, {
        title: 'Componente de un modulos externos',
        path: 'componente-externo'
      }, {
        title: 'Componente de un modulo NPM',
        path: 'componente-npm'
      }, {
        title: 'Componente de carga retardada',
        path: 'lazy-loading'
      }
      ]
    }, {
      title: 'Rutas',
      key: 'rutas',
      children: [{
        title: 'Rutas Anidadas',
        path: 'rutas-anidadas'
      }, {
        title: 'Parametros de Consulta',
        path: 'parametros-consulta'
      }]
    }, {
      title: 'RXJS',
      key: 'rxjs',
      children: [{
        title: 'Contruir un Observable',
        path: 'observable'
      }, {
        title: 'Operadores',
        path: 'operators'
      }, {
        title: 'Promesas',
        path: 'promises'
      },{
        title: 'Operadores Join',
        path: 'join-operators'
      },{
        title: 'Subject',
        path: 'subject'
      }]
    },{
      title: 'Templates',
      key: 'templates',
      children: [{
        title: 'Content',
        path:'content'
      },
      {
        title: 'Template Outlet',
        path:'template-outlet'
      },{
        title: 'View Child',
        path:'view-child'
      }]
    }


  ];


  constructor(private alertService: AlertService) {

  }

  ngOnInit(): void {

    this.alert$ = this.alertService.alert.asObservable().pipe(
      distinctUntilKeyChanged('message'),
      debounceTime(500),
      tap(value=> setTimeout(() => {
        this.alertService.notify(null, '')
      }, 2000)),

    );

  }


}
