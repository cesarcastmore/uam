import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css'],
  // encapsulation:ViewEncapsulation.Emulated es el por defecto de angular,
  encapsulation: ViewEncapsulation.None
})
export class EncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
