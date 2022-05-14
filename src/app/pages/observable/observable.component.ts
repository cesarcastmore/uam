import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  sydney: number = 0;
  montreal: number=0;

  liverpool$: Observable<number>= new Observable<number>();

  constructor() {

  }

  ngOnInit(): void {

    this.getObservable().subscribe(value => {
      this.sydney = value;
    })


    this.getObservableTime().subscribe(value => {
      this.montreal = value;
    });

    this.liverpool$= this.getObservableTime();


  }


  //Esta es un stream de un solo valor y de inmediato termina
  public getObservable(): Observable<number> {


    return Observable.create((observer: Observer<number>) => {

      observer.next(this.getRandom());
      observer.complete();



    });
  }


  //este observables es atraves del tiempo de
  public getObservableTime(): Observable<number> {
    return Observable.create((observer: Observer<number>) => {

      observer.next(this.getRandom());


      setTimeout(()=>{
        observer.next(this.getRandom());

      }, 2000);

      setTimeout(()=>{
        observer.next(this.getRandom());

      }, 4000);


      setTimeout(()=>{
        observer.complete();

      }, 6000);




    });
  }



  public getRandom(): number {
    return Math.floor(Math.random() * (40 - 5)) + 5;
  }



}
