import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { merge, concat, forkJoin } from 'rxjs';


@Component({
  selector: 'app-join-operators',
  templateUrl: './join-operators.component.html',
  styleUrls: ['./join-operators.component.css']
})
export class JoinOperatorsComponent implements OnInit {

  mergeOperators$: Observable<any[]> | undefined;
  concatOperators$: Observable<any[]> | undefined;
  forkJoinOperators$: Observable<any[]> | undefined;


  constructor() { }

  ngOnInit(): void {

    //conforme termina un observable del arreglo, se va emitiendo el valor
    this.mergeOperators$ = merge(this.getProductos(), this.getUsuarios()).pipe(
      tap(values => console.log(values))
    );

    //ccuando termine el previo observable, continua con el siguiente, en resumen es ejecucion secuencial
    this.concatOperators$ = concat(this.getProductos(), this.getUsuarios()).pipe(
      tap(values => console.log(values))
    );

    //emite el valor cuando el ultimo termina, el resultado es en una matriz
    this.forkJoinOperators$ = forkJoin(this.getProductos(), this.getUsuarios()).pipe(
      tap(values => console.log(values))
    );

  }


  public getUsuarios(): Observable<any[]> {

    return of([{
      name: 'Marcos',
      first_name: 'Lopez'
    }, {
      name: 'Benito',
      first_name: 'Juarez'
    }]).pipe(
      delay(1000)
    )

  }


  public getProductos(): Observable<any[]> {

    return of([{
      name: 'Product1',
      price: 12
    }, {
      name: 'Product2',
      price: 24
    }]).pipe(
      delay(2000)
    )

  }

}
