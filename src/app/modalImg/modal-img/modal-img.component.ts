import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.scss']
})
export class ModalImgComponent implements OnInit {

  dataModal:any;
  active:boolean = false;
  contVista:any;

  constructor(private sendData: SendDataService,
    private store:StoreService) { }

  ngOnInit(): void {
    this.receiveData();
    
  }

  setStore(){
    let dataStore = {
      tags: this.dataModal.tags,
      views: this.dataModal.views,
      likes: this.dataModal.likes,
      urlImg: this.dataModal.webformatURL
    }

    this.store.sendDispatch(dataStore);
  }

  receiveData(){

    this.dataModal = this.sendData.sendData();
    this.setStore();
    
  }

  clickLike(){
    this.active = !this.active

      if(this.active){
        this.dataModal.likes = this.dataModal.likes + 1;
      } else{
        this.dataModal.likes = this.dataModal.likes - 1;
      }
  }

}
