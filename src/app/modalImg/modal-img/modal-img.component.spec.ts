import { TestBed } from '@angular/core/testing';

import { ModalImgComponent } from './modal-img.component';
import { StoreService } from 'src/app/store/store.service';

describe('ModalImgComponent', () => {
  let component: ModalImgComponent;
  let sendData:any;
  let store:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      providers: [
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

    store = {
      sendDispatch: jest.fn(),
      getState$: jest.fn()
    }

    component = new ModalImgComponent(
      store
    )
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
    jest.spyOn(store, 'getState$').mockReturnValue(true);
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
