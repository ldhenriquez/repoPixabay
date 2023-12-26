import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setData, getData } from './store.acciones';
import { Observable } from 'rxjs';
import { selectDataCollection } from './store.seleccion';

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

  getState$(): any {
    let data: any = this.store.select(selectDataCollection);
    return data.actionsObserver._value;
  }

}
