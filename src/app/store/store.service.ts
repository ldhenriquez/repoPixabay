import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setData } from './store.acciones';

/**
  * Servicio ngrx store
  */
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private store: Store,
  ) { }

  /**
  * Servicio enviar y guardar store dato ingresado
  * @param value:any
  */
  sendDispatch(value: any) {
    this.store.dispatch(setData(value));
  }
}
