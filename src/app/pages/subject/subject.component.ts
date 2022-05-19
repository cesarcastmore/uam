import { Component, OnInit } from '@angular/core';
import {AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private alertService:AlertService) { }

  ngOnInit(): void {
  }


  public sendMessage(message: string){
    //el servicio va emitir un valor
    this.alertService.notify('danger', message);

  }

}
