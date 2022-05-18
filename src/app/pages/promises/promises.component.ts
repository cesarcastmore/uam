import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  products: any[] = [];
  usuarios: any[] = [];


  constructor() {

  }

  async ngOnInit() {

    console.log("Inicio");

    await this.getInformacion();

    //las promesas y los observables ambos asyncronicos


    /*
    this.getUsuarios().subscribe((usuarios: any[])=> {
      this.usuarios= usuarios;
      console.log("usuarios", usuarios);

    })


    this.getProducts().then(products=> {
      console.log("productos", products);
      this.products= products;
    } );*/



    console.log("termino");

  }

  //Solo tiene que ser promesas para el async
  async getInformacion() {

    this.products = await this.getProducts();
    console.log("productos", this.products);

    console.log("siguiente instruccion");

    //El observalbe tiene que terminar, sino se va quedar clicado
    this.usuarios = await this.getUsuarios().toPromise();
    console.log("usuarios", this.usuarios);




  }


  public getProducts(): Promise<any[]> {

    return new Promise<any[]>((resolve, reject) => {

      setTimeout(() => {

        resolve([{
          name: 'Product1',
          price: 12
        }, {
          name: 'Product2',
          price: 24
        }])

      }, 250)


    });

  }


  public getUsuarios(): Observable<any[]> {

    return of([{
      name: 'Marcos',
      first_name: 'Lopez'
    }, {
      name: 'Benito',
      first_name: 'Juarez'
    }]).pipe(
      delay(500)
    )

  }

}
