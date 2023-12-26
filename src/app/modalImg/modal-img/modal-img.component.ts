import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { BsModalRef } from 'ngx-bootstrap/modal';


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

  constructor(private store:StoreService) { }

  ngOnInit(): void {
    this.receiveData();
  }

  /**
  * Recibe data de home especifica de imagen clickeada para ser mostrada
  * Y ejecuta setStore
  */
  receiveData(){

    this.dataModal = this.store.getState$();


  }

/**
  * Control de likes y estilos de boton
  */
  clickLike(){
    this.active = !this.active

    let like = this.dataModal.likes;
    like = this.active ? like + 1 : like - 1;

      let dataStore = {
        tags: this.dataModal.tags,
        views: this.dataModal.views,
        likes: like,
        urlImg: this.dataModal.urlImg
      }

      this.store.sendDispatch(dataStore);
      this.receiveData();
  }

}
