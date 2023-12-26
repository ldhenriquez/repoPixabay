import { createReducer, on } from '@ngrx/store';
import { setData } from './store.acciones';

export const dataStoreKey = 'dataStore';

export const initialState = {};

const _dataReducer = createReducer(
    initialState,
    on(setData, (state, { data }) => state = data),
  );

  export function dataReducer(state: any, action: any) {
    return _dataReducer(state, action);
  }
