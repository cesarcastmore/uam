import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { TitleComponent } from './title/title.component';

import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('title') titleElement: ElementRef | undefined;

  @ViewChild(TitleComponent, { static: true }) titleCompenent: TitleComponent | undefined;


  lista: string[] = ['Benito Juarez', 'Miguel Hidalgo', 'Franciso I Madero', 'Jose Maria Morles'];

  @ViewChildren('listaElement') listaElement: QueryList<ElementRef> | undefined;
  @ViewChildren(CardComponent) listaComponents: QueryList<CardComponent> | undefined;



  listaCards: { header: string; title: string; description: string;}[] = [
    {
      header: 'Header 1',
      title: 'Title 1',
      description: 'Descritpion 1'
    }, {
      header: 'Header 2',
      title: 'Title 2',
      description: 'Descritpion 2'
    }, {
      header: 'Header 3',
      title: 'Title 3',
      description: 'Descritpion 3'
    }, {
      header: 'Header 4',
      title: 'Title 4',
      description: 'Descritpion 4'
    }]



  //static = false se inicia desde ngAfterViewInit
  //static = true se inicia desde ngOnInit

  constructor() { }


  ngOnInit(): void {

    this.titleCompenent?.setTitle('Cesar')


  }

  ngAfterViewInit(): void {

    if (this.titleElement) {
      this.titleElement.nativeElement.style.color = 'green';
      this.titleElement.nativeElement.style.fontSize = '14px';

    }

  }

  cambiarColor() {

    this.listaElement?.forEach((item: ElementRef) => {
      item.nativeElement.style.color = 'green';
    })


  }

  ponerBotones(){

    this.listaComponents?.get(0)?.addButton('success', 'Enviar');
    this.listaComponents?.get(1)?.addButton('danger', 'Borrar');

    this.listaComponents?.get(1)?.setHeader('Header 2');



  }


}

