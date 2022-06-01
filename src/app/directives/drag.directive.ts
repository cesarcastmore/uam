import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { ListService } from '../services/list.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  isSelected: boolean = false;

  @Input() no: number = 0;
  @Input() item: any;


  constructor(public listService: ListService) {

  }



  @HostListener('click')
  onClick() {
    this.isSelected=!this.isSelected;
    if(this.isSelected){
      this.backgroundColor = 'green';

    }else {
      this.backgroundColor = 'transparent';

    }
  }


  @HostListener('drag')
  onDrag(){
    this.listService.isDragging(this.no, this.item);
    

  }

  @HostListener('mouseout')
  onMouseOut(){
    this.backgroundColor = 'transparent';
    this.isSelected=false;
  }

}
