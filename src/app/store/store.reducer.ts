import { createReducer, on } from '@ngrx/store';
import {setLoading, removeLoading } from './store.actions';

export const initialState: boolean =false;

export const storeReducer = createReducer(
  initialState,
  on(setLoading, (state) => {
      return true;
  }),
  on(removeLoading, (state) =>{
      return false;
  })

);