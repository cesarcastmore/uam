import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, delay, mergeMap } from 'rxjs/operators';
import * as types from './store.constants';
import { UsersService } from '../services/users.service'
import { Observable } from 'rxjs';


@Injectable()
export class LoadingEffects {

  actionsLoading$ = createEffect(() => this.actions$.pipe(
    ofType(types.SET_LOADING),
    delay(2000),
    map(state => {
      return { type: types.REMOVE_LOADING };
    }))
  );


  constructor(private actions$: Actions) { }

}



@Injectable()
export class UsersEffects {

  loadedAction$ = createEffect(() => this.actions$.pipe(
    ofType(types.LOADING_USERS),
    mergeMap(state => {
      return this.getUsers();
    }))
  );


  setSpinnerAction$ = createEffect(() => this.actions$.pipe(
    ofType(types.LOADING_USERS),
    map(state => {
      return { type: types.SET_LOADING_API };
    }))
  );


  private getUsers(): Observable<any> {
    return this.userService.getUsers().pipe(
      map(result => result.users),
      map(items => {
        return { type: types.LOADED_USERS, items, success: true, message: 'Exito' }
      })
    );

  }

  removeSpinnerAction$ = createEffect(() => this.actions$.pipe(
    ofType(types.LOADED_USERS),
    map(state => {
      return { type: types.REMOVE_LOADING };
    }))
  );


  constructor(private actions$: Actions, private userService: UsersService) { }

}
