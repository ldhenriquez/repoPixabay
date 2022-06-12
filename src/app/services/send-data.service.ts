import { EventEmitter, Injectable, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ModalImgComponent } from '../modalImg/modal-img/modal-img.component';

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
