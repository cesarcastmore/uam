import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { ProductoComponent } from './producto/producto.component';
import { UsuarioComponent } from './usuario/usuario.component';


@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit {



  type: string = 'producto';

  @ViewChild('dynamic', {static: true, read: ViewContainerRef}) dynamic: ViewContainerRef | undefined;

  constructor(private factory: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
  }


  changeType(type: string) {
    this.type = type;

  }

  addComponent() {

    if(this.type == 'producto'){
      let dynamicCompoent = this.factory.resolveComponentFactory(ProductoComponent);
      let component = this.dynamic?.createComponent(dynamicCompoent);
      component!.instance.title='Agrege Producto';

    } else if(this.type == 'usuario'){
      let dynamicCompoent = this.factory.resolveComponentFactory(UsuarioComponent);
      let component = this.dynamic?.createComponent(dynamicCompoent);
      component!.instance.title='Agregar Usuario';

    }



  }


  removeAllComponents(){
    this.dynamic?.clear();
  }



}
