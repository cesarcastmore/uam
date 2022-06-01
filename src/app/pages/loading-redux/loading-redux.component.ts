import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {setLoading, removeLoading} from '../../store/store.actions'

@Component({
  selector: 'app-loading-redux',
  templateUrl: './loading-redux.component.html',
  styleUrls: ['./loading-redux.component.css']
})
export class LoadingReduxComponent implements OnInit {

  constructor(private store: Store<{ is_loading: boolean }>) { }

  ngOnInit(): void {
    this.store.dispatch(setLoading());

   
  }

}
