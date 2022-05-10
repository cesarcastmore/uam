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
      children: [
        {
          title: 'Componente de Modulos Externos',
          path: 'external_component'
        }, {
          title: 'Componentes Externos Web',
          path: 'web_component',
          required_auth: true
        }, {
          title: 'Modulo Carga Lenta',
          path: 'editor'
        }, {
          title: 'Componentes Internos',
          path: 'internal_component'
        }
      ]

    },

    {
      title: 'Routing',
      key: 'routing',
      required_auth: true,
      children: [{
        title: 'Parametros',
        path: 'routing_params'
      }, {
        title: 'Productos',
        path: 'productos'
      }]

    },

    {
      title: 'Observable',
      key: 'observable',
      children: [{
        title: 'Weather',
        path: 'observable/weather'
      }, {
        title: 'Carrito',
        path: 'observable/carrito'
      }, {
        title: 'Movie DB',
        path: 'observable/moviedb',
        required_auth: true
      },{
        title: 'Factura',
        path: 'observable/factura'
      }]

    },
    {
      title: 'Eventos',
      path: 'events'
    },
    {
      title: 'Template',
      key: 'template',
      required_auth: true,
      children: [{
        title: 'Content',
        path: 'template/content'
      },{
        title: 'loading',
        path: 'template/loading'
      },{
        title: 'views',
        path: 'template/views'
      }, {
        title: 'Dynamic Components',
        path: 'template/dynamic-components'
      }]
    },

      {
        title: 'Change Detection',
        key: 'change',
        children: [{
          title: 'Reference',
          path: 'change-detection-ref'
        },{
          title: 'Push',
          path: 'change-detection-push'
        }]
    }, 
    {
      title: 'Usuario',
      path: 'usuarios'
    }];


    constructor(){

    }


}
