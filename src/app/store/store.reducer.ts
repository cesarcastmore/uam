import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {setLoading, removeLoading, loadingUser, loadedUser, setLoadingApi } from './store.actions';

export const initialState: boolean =false;

export const loadingReducer = createReducer(
  initialState,
  on(setLoading, (state) => {
      return true;
  }),
  on(removeLoading, (state) =>{
      return false;
  }),
  on(setLoadingApi, (state) => {
    return true;
})

);

export interface UsersState {
  items: any[];
  success: boolean;
  message: string;

}

export const initialUserState: UsersState ={
  items: [],
  success: false,
  message: ''
}

export const usersReducer= createReducer(
  initialUserState,
  on(loadingUser, (state)=> {
    return {...state, items: [], success: false, message: ''};
  }),
  on(loadedUser, (state, {items, success, message})=> {

    return {...state, items, success, message};

  })
)