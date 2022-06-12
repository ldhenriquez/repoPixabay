import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  url = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';

  constructor(private http: HttpClient) { }

  getImages(): Observable<any>{
    return this.http.get(this.url); 
  }

  getDropdown(category:string): Observable<any>{
    return this.http.get(`${this.url}&category=${category}`); 
  }

  getFilterType(type:string): Observable<any>{
    return this.http.get(`${this.url}&lang=es&q=${type}`); 
  }
}
