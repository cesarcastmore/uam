import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, AfterViewInit {

  @ViewChild('searcher', { static: true }) searcher: ElementRef | undefined;

  movies: any[]=[];

  formQuery: FormGroup = new FormGroup({
    query: new FormControl('')
  })



  constructor() {

  }

  ngOnInit(): void {

    this.formQuery?.get('query')?.valueChanges.subscribe(query => {

      ajax('https://api.themoviedb.org/3/search/movie?api_key=270d9e4ef3fca25ea83fb808c43cbb9d&query=' + query)
        .subscribe((result: any) => {
          this.movies= result.response.results;
        })


    })

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
