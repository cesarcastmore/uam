import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css']
})
export class OnPushComponent implements OnInit {

  cards: any = {
    card1: { header: 'header1', title: 'title1', description: 'description1' },
    card2: { header: 'header2', title: 'title2', description: 'description2' }
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCard1(){

    this.cards.card1= { header: 'HEADER1', title: 'TITLE1', description: 'DESCRIPTION1' };

  }

  cambiarCard2(){
    this.cards.card2= { header: 'HEADER2', title: 'TITLE2', description: 'DESCRIPTION2' };

  }

}
