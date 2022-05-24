import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-ng-container',
  templateUrl: './template-ng-container.component.html',
  styleUrls: ['./template-ng-container.component.css']
})
export class TemplateNgContainerComponent implements OnInit {

  @Input() title: string ='';
  @Input() template: TemplateRef<any> |null= null;

  constructor() { }

  ngOnInit(): void {
  }

}
