import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {setLoading, loadingUser} from '../../store/store.actions';
import {UsersState} from '../../store/store.reducer';
import { Observable } from 'rxjs';
import {getUsers, getMessage} from '../../store/store.selectors';


@Component({
  selector: 'app-loading-redux',
  templateUrl: './loading-redux.component.html',
  styleUrls: ['./loading-redux.component.css']
})
export class LoadingReduxComponent implements OnInit {


  users$: Observable<any>| undefined; 
  message$: Observable<string>| undefined;

  constructor(private store: Store<{ is_loading: boolean, users: UsersState }>) { 
    this.users$ = this.store.select(getUsers);
    this.message$ = this.store.select(getMessage);

  }

  ngOnInit(): void {
    //this.store.dispatch(setLoading());
    this.store.dispatch(loadingUser());

   
  }

}
