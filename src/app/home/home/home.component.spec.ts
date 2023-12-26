import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PixabayService } from '../../services/pixabay.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let pixay: any;
  let modalService: any;
  let store: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: PixabayService,
          useValue: {}
        },
        {
          provide: BsModalService,
          useValue: {}
        }
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    pixay = {
      getAllImages: jest.fn(),
      getDropdown: jest.fn(),
      getFilterType: jest.fn(),
    }

    modalService = {
      show: jest.fn(),
    }

    store = {
      sendDispatch: jest.fn()
    }

    component = new HomeComponent(
      pixay,
      modalService,
      store
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    jest.spyOn(pixay, 'getAllImages').mockReturnValue(of(true));
    component.obtenerImages();
    component.ngOnInit();
  });

  it('getDropdown', () => {
    jest.spyOn(pixay, 'getDropdown').mockReturnValue(of(true));
    component.filterDropdown('portatil');
  });

  it('getDropdown  NAN', () => {
    component.filterDropdown('NAN');
  });

  it('submitFilter', () => {
    jest.spyOn(pixay, 'getFilterType').mockReturnValue(of(true));
    component.submitFilter();
  });

  it('openModalImgs', () => {
    let data = {
      views:12
    }
    jest.spyOn(modalService, 'show').mockReturnValue(of(true));
    component.openModalImgs(data);
  });
});
