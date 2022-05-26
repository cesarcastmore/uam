import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.css']
})
export class ChangeDetectorComponent implements OnInit {

  cards: any[] = [];

  changeCards: Subject<boolean> = new Subject<boolean>();



  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detector.detach();


    this.changeCards.
      pipe(debounceTime(500)).subscribe(value => {
        this.detector.detectChanges();
      });


  /*    setTimeout(() => {
        this.detector.reattach();
      }, 4000)*/


  }


  addCard() {

    this.changeCards.next(true);

    this.cards.push({
      header: 'Encabezado ',
      description: 'Descritpion '
    });


  }

}
