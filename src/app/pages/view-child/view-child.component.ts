import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, } from '@angular/core';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('title') titleElement: ElementRef | undefined;

  @ViewChild(TitleComponent, {static: true}) titleCompenent: TitleComponent  | undefined;



  //static = false se inicia desde ngAfterViewInit
  //static = true se inicia desde ngOnInit

  constructor() { }


  ngOnInit(): void {

    this.titleCompenent?.setTitle('Cesar')


  }

  ngAfterViewInit(): void {

    if(this.titleElement){
      this.titleElement.nativeElement.style.color = 'green';
      this.titleElement.nativeElement.style.fontSize = '14px';

    }






  }

}
