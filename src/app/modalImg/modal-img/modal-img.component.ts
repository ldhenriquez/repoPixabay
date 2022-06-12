import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { SendDataService } from '../../services/send-data.service';


/**
 * Componente de modal al dar click en cada imagen
 */
@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.scss']
})
export class ModalImgComponent implements OnInit {

  /**
  * Datos de modal
  */
  dataModal:any;
  /**
  * Variable para controlar cambio de boton de like
  */
  active:boolean = false;

  /**
  * Variable para contar vistas
  */
  contVista:any;

  constructor(private sendData: SendDataService,
    private store:StoreService) { }

  ngOnInit(): void {
    this.receiveData();
    
  }

  /**
  * Guardar con store
  */
  setStore(){
    let dataStore = {
      tags: this.dataModal.tags,
      views: this.dataModal.views,
      likes: this.dataModal.likes,
      urlImg: this.dataModal.webformatURL
    }

    this.store.sendDispatch(dataStore);
  }

  /**
  * Recibe data de home especifica de imagen clickeada para ser mostrada 
  * Y ejecuta setStore
  */
  receiveData(){

    this.dataModal = this.sendData.sendData();
    this.setStore();
    
  }


/**
  * Control de likes y estilos de boton
  */
  clickLike(){
    this.active = !this.active

      if(this.active){
        this.dataModal.likes = this.dataModal.likes + 1;
      } else{
        this.dataModal.likes = this.dataModal.likes - 1;
      }
  }

}
