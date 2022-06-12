import { createAction, props } from '@ngrx/store';

export const setData = createAction(
    '[Module Component] SetData',
    props<{ data: any }>()
    );
export const getData = createAction('[Module Component] GetData');