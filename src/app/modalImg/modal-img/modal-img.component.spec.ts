import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImgComponent } from './modal-img.component';
import { SendDataService } from '../../services/send-data.service';
import { Store } from '@ngrx/store';
import { StoreService } from 'src/app/store/store.service';

describe('ModalImgComponent', () => {
  let component: ModalImgComponent;
  let fixture: ComponentFixture<ModalImgComponent>;
  let sendData:any;
  let store:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      providers: [
        {
          provide: SendDataService,
          useValue: {}
        },
        {
          provide: StoreService,
          useValue: {}
        }
      ],
      declarations: [ ModalImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    sendData = {
      sendData: jest.fn()
    }

    store = {
      sendDispatch: jest.fn()
    }

    component = new ModalImgComponent(
      sendData,
      store
    )
    /* fixture = TestBed.createComponent(ModalImgComponent);
    component = fixture.componentInstance; */
    /* fixture.detectChanges(); */
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('receiveData', () => {
    component.dataModal = {
      tags: 'ABCD',
      views: 213,
      likes: 34,
      urlImg: 'https://www.google.com/'
    }
    jest.spyOn(sendData, 'sendData').mockReturnValue(true);
    jest.spyOn(store, 'sendDispatch').mockReturnValue(true);
    component.setStore();
    component.receiveData();
    component.ngOnInit();
  });

  it('clickLike', () => {
    component.active = false;
    component.dataModal = {
      tags: 'ABCD',
      views: 213,
      likes: 34,
      urlImg: 'https://www.google.com/'
    }
    component.clickLike();
  });

  it('clickLike', () => {
    component.active = true;
    component.dataModal = {
      tags: 'ABCD',
      views: 213,
      likes: 34,
      urlImg: 'https://www.google.com/'
    }
    component.clickLike();
  });
});
