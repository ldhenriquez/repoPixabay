import { Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  datae = new Subject<any>();

  modalRed!: BsModalRef;
  dataModal:any

  constructor() { }

  setData(data:any){
    this.dataModal=data;
  }

  sendData(){
    return this.dataModal;
  }
}
