import { Component } from '@angular/core';
import { Menu } from './models/menu';
import { ComponentRootComponent } from './pages/component-root/component-root.component';

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
      },{
        title: 'Componente de un modulos externos',
        path: 'componente-externo'
      }
      ]
    }

  ];


  constructor() {

  }


}
