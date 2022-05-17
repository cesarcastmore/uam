import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  sydney: number = 0;
  montreal: number = 0;

  liverpool$: Observable<number> = new Observable<number>();

  londres: number = 0;
  londresSubscription: Subscription | undefined;


  mexicoCity: number = 0;

  constructor() {

  }

  ngOnInit(): void {

    this.getObservable().subscribe(value => {
      this.sydney = value;
    })


    this.getObservableTime().subscribe(value => {
      this.montreal = value;
    });

    this.liverpool$ = this.getObservableTime();

    this.londresSubscription = this.getObservableTime().subscribe(value => {
      this.londres = value;
    });

    //Aqui estamos deteniendo el subscribe antes de que termine
    /*setTimeout(() => {
      this.londresSubscription?.unsubscribe();
    }, 3000);*/


    this.getObservableError().subscribe(
      (value => {
        this.mexicoCity = value;
      }), ((error) => {
        console.log(error);

      }));


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


      setTimeout(() => {
        observer.next(this.getRandom());

      }, 2000);

      setTimeout(() => {
        observer.next(this.getRandom());

      }, 4000);


      setTimeout(() => {
        observer.complete();

      }, 6000);




    });
  }


  //este observables es atraves del tiempo de
  public getObservableError(): Observable<number> {
    return Observable.create((observer: Observer<number>) => {

      observer.next(this.getRandom());


      setTimeout(() => {
        observer.next(this.getRandom());

      }, 2000);

      setTimeout(() => {
        observer.error("Se ha producido un error");

      }, 4000);


      setTimeout(() => {
        observer.complete();

      }, 6000);




    });
  }


  public ngOnDestroy(): void {
    console.log("Se destruyo el componente");
    this.londresSubscription?.unsubscribe();

  }



  public getRandom(): number {
    return Math.floor(Math.random() * (40 - 5)) + 5;
  }



}
