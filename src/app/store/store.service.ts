import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setData } from './store.acciones';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private store: Store,
  ) { }

  sendDispatch(value: any) {
    this.store.dispatch(setData(value));
  }
}
