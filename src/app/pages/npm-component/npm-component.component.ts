import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-npm-component',
  templateUrl: './npm-component.component.html',
  styleUrls: ['./npm-component.component.css']
})
export class NpmComponentComponent implements OnInit {




  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { 
    
  }

  ngOnInit(): void {
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
