import { Component, OnInit} from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalImgComponent } from 'src/app/modalImg/modal-img/modal-img.component';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  allListImgs: any[] = [];
  listImgs: any[] = [];
  contVista:any;
  filterForm!: FormGroup;

  modalRed!: BsModalRef;

  

  constructor(private pixay: PixabayService, 
    private modalService: BsModalService, 
    private sendData: SendDataService,
    ) {
    this.filterForm = new FormGroup({
      type: new FormControl('',[Validators.required,Validators.minLength(1), Validators.maxLength(100)]),  
    });
   }

  ngOnInit(): void {
    this.obtenerImages();
  }

  obtenerImages(){
    this.pixay.getImages().subscribe(res => {
      this.allListImgs=res.hits;
      this.listImgs=res.hits;
      }, error =>{
        console.log(error);
      })
  }

  filterDropdown(category:string){
    if(category == 'NAN'){
      this.listImgs=this.allListImgs;
    }else{
      this.pixay.getDropdown(category).subscribe(res => {
        this.listImgs=res.hits;
        }, error =>{
          console.log(error);
        })
    }
    
  }

  submitFilter(){
    let type = this.filterForm.controls.type.value;
    this.pixay.getFilterType(type).subscribe(res => {
      this.listImgs=res.hits;
      }, error =>{
        console.log(error);
      })
    
  }

  openModalImgs(data:any){
    data.views = data.views +1;
    this.sendData.setData(data);
    this.modalService.show(ModalImgComponent);
  }
}
