import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() header: string='Header ';
  @Input() title: string= 'Title';
  @Input() description: string= 'Description';
  public buttons: any[]=[];


  constructor() { }

  ngOnInit(): void {
  }


  public addButton( type: string, title: string){
    this.buttons.push({type, title});
  }

  public setHeader(header: string){
    this.header= header;
  }

  print(){
    console.log("estoy imprimiendo", this.header);
  }

}
