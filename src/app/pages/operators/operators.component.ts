import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, mergeMap, concatMap, switchMap, tap, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { ajax } from 'rxjs/ajax';
import { updateResponse } from './actions';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})

/*
el mergeMap, no termina el observable, puede haber resultados no deseados en el buscador
concatMap espera a que termine el previo
switchMap cancela el previo y continua con el siguiente 

*/
export class OperatorsComponent implements OnInit, AfterViewInit {

  @ViewChild('searcher', { static: true }) searcher: ElementRef | undefined;

  movies$: Observable<any[]> | undefined;

  formQuery: FormGroup = new FormGroup({
    query: new FormControl('')
  })



  constructor() {

  }

  ngOnInit(): void {

    this.movies$ = this.formQuery?.get('query')?.valueChanges.pipe(
      tap(value => console.log("1", value)),
      debounceTime(2000),
      tap(value => console.log("2", value)),
      filter(value => value !== null && value !== ''),
      tap(value => console.log("3", value)),
      distinctUntilChanged(),
      tap(value => console.log("4", value)),
      switchMap(this.fetchMovies)
    );

  }

  public fetchMovies(query: string): Observable<any[]> {


   /*let updateResponse = (response: any) => {
      let movies: any[] = response.response.results;
      movies.map(item => {
        item.poster_path = 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
        return item;
      })
  
      return movies;
    }*/



    return ajax('https://api.themoviedb.org/3/search/movie?api_key=270d9e4ef3fca25ea83fb808c43cbb9d&query=' + query)
      .pipe(
        map(updateResponse)
      );
  }



  ngAfterViewInit(): void {

    //Fue un operador de creacion

    fromEvent(this.searcher?.nativeElement, 'change').pipe(
      map((event: any) => { return event?.target.value; })
    ).subscribe(event => {
      //console.log(event);
    });


  }

}
