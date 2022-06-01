import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, delay } from 'rxjs/operators';
import * as types from './store.constants';


@Injectable()
export class LoadingEffects {

  actionsLoading$ = createEffect(() => this.actions$.pipe(
    ofType(types.SET_LOADING),
    delay(2000),
    map(state=> {
      return { type: types.REMOVE_LOADING};
    }))
  );


  constructor(private actions$: Actions) {}

}
