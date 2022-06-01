import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  list: any = [[
    {
      id: 1,
      name: 'A',
      date: '2021-01-02'
    },
    {
      id: 2,
      name: 'Z',
      date: '2021-01-05'

    },
    {
      id: 3,
      name: 'G',
      date: '2020-01-06'

    },
    {
      id: 4,
      name: 'Y',
      date: '2020-12-06'

    }
  ], [
    {
      id: 5,
      name: 'J',
      date: '2021-12-01'

    },
    {
      id: 6,
      name: 'N',
      date: '2019-07-06'

    },
    {
      id: 7,
      name: 'L',
      date: '2022-07-06'

    },
    {
      id: 8,
      name: 'R',
      date: '2011-07-06'

    }
  ]];

  public dragging: any;

  constructor() {

  }

//Es cuando se suelta
  public add(no: number ) {
    this.list[no].push(this.dragging.item);
    this.list = _.cloneDeep(this.list);

  }



//Esta es para removerlo de la lista
  public remove() {


    let no = this.dragging.no;
    let remove_item = this.dragging.item;

    let index = this.list[no].findIndex((item: any) => item.id === remove_item.id);

    this.list[no].splice(index, 1);


  }


  //Aqui es cuando se empieza arrastrar
  public isDragging(no: number, item: any) {
    this.dragging = { no, item };
  }


}