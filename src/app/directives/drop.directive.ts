import { Directive, Input, HostListener } from '@angular/core';
import { ListService } from '../services/list.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Input() no: number =-1;

  constructor(private listService: ListService) { }


  @HostListener('dragover', ['$event'])
  public dragOver(event: any){
    event.preventDefault();
  }




  @HostListener('drop')
  drop(){

    console.log("DROP");
    this.listService.remove();
    this.listService.add(this.no);
    
  }

}
