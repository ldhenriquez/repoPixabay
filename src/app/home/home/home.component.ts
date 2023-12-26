import { Component, OnInit} from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalImgComponent } from 'src/app/modalImg/modal-img/modal-img.component';
import { StoreService } from 'src/app/store/store.service';

/**
 * Componente de home
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
  * Variable donde se almacena el primer llamado de servicio
  * almacena data de imagenes
  */
  allListImgs: any[] = [];

  /**
  * Variable donde se almacena data de imagenes a mostrar
  */
  listImgs: any[] = [];

  nameCategory: string = 'Categorías';

  /**
  * Formulario para busqueda
  */
  filterForm!: FormGroup;

  constructor(private pixay: PixabayService,
    private modalService: BsModalService,
    private store:StoreService,
    ) {
    this.filterForm = new FormGroup({
      type: new FormControl('',[Validators.required,Validators.minLength(1), Validators.maxLength(100)]),
    });
   }

  ngOnInit(): void {
    this.obtenerImages();
  }

  /**
  * Consulta al servicio para obtener las imagenes predeterminadas
  */
  obtenerImages(){
    this.pixay.getAllImages().subscribe(res => {
      this.allListImgs=res.hits;
      this.listImgs=res.hits;
      }, error =>{
        console.log(error);
      })
  }

  /**
  * Consulta servicio acorde a parametro ingresado para dropdown
  * @param category:string
  */
  filterDropdown(category:string){
    if(category == 'NAN'){
      this.listImgs=this.allListImgs;
      this.nameCategory = 'General';
    }else{
      this.pixay.getDropdown(category).subscribe(res => {
        this.listImgs=res.hits;
        }, error =>{
          console.log(error);
        })
        this.nameCategory = category[0].toUpperCase() + category.slice(1);
    }

  }

  /**
  * Consulta servicio acorde a parametro ingresado por la busqueda de teclado
  */
  submitFilter(){
    let type = this.filterForm.controls.type.value;
    this.pixay.getFilterType(type).subscribe(res => {
      this.listImgs=res.hits;
      }, error =>{
        console.log(error);
      })

  }

  /**
  * Despliega el modal y envia data de imagen por redux
  * @param data:any
  */
  openModalImgs(data:any){
    data.views = data.views +1;

    let dataStore = {
      tags: data.tags,
      views: data.views,
      likes: data.likes,
      urlImg: data.webformatURL
    }

    this.store.sendDispatch(dataStore);
    this.modalService.show(ModalImgComponent);
  }
}
