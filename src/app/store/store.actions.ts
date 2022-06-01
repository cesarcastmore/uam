import { createAction } from '@ngrx/store';
import * as types from './store.constants';

export const setLoading = createAction(types.SET_LOADING);
export const removeLoading = createAction(types.REMOVE_LOADING);