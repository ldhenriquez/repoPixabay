import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
  * Servicio de pixaybay
  */

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  url = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';

  constructor(private http: HttpClient) { }

  /**
  * Servicio para obtener imagenes predeterminadas
  */
  getAllImages(): Observable<any>{
    return this.http.get(this.url);
  }

  /**
  * Servicio para obtener imagenes acorde a categoria seleccionada o ingresada
  * @param category:any
  */
  getDropdown(category:string): Observable<any>{
    return this.http.get(`${this.url}&category=${category}`);
  }

  /**
  * Servicio para obtener imagenes al tipo ingresado por teclado
  * @param type:any
  */
  getFilterType(type:string): Observable<any>{
    return this.http.get(`${this.url}&lang=es&q=${type}`);
  }
}
