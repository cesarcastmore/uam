import { Component, OnInit, ViewChild, TemplateRef , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-viewchild-templates',
  templateUrl: './viewchild-templates.component.html',
  styleUrls: ['./viewchild-templates.component.css']
})
export class ViewchildTemplatesComponent implements OnInit , AfterViewInit{

  @ViewChild('danger', {static: true}) danger: TemplateRef<any> | undefined;
  @ViewChild('success', {static: true}) success: TemplateRef<any> | undefined;
  @ViewChild('info', {static: true}) info: TemplateRef<any> | undefined;
  @ViewChild('primary', {static: true}) primary: TemplateRef<any> | undefined;

  alertas: any[]=[];

  constructor() { }


  ngOnInit(): void {

    this.alertas= [{ 
      title: 'Danger',
      template: this.danger
    },{ 
      title: 'Success',
      template: this.success
    },{ 
      title: 'Info',
      template: this.info
    }] 
  


  }


  ngAfterViewInit(): void {

    
   }

}
