import { Component } from '@angular/core';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uam';

  isOpen: boolean = true;

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
      }]
    }


  ];


  constructor() {

  }


}
