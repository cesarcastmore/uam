import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.css']
})
export class TemplateOutletComponent implements OnInit {

  productos:any[]=[{
    description: 'Descripcion 1',
    button: 'enviar 1'
  },{
    description: 'Descripcion 2',
    button: 'enviar 2'
  },{
    description: 'Descripcion 3',
    button: 'enviar 3'
  }]




  constructor() { }

  ngOnInit(): void {
  }

}
