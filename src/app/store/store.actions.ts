import { createAction, props } from '@ngrx/store';
import * as types from './store.constants';

export const setLoading = createAction(types.SET_LOADING);
export const removeLoading = createAction(types.REMOVE_LOADING);

export const setLoadingApi = createAction(types.SET_LOADING_API);
export const loadingUser = createAction(types.LOADING_USERS);
export const loadedUser = createAction(types.LOADED_USERS,
    props<{ items: any[]; success: boolean; message: string; }>())
