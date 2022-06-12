import { componentFactoryName } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SendDataService } from './send-data.service';

describe('SendDataService', () => {
  let service: SendDataService;
  let bsModal: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      /* imports: [BsModalService], */
      
    /* providers: [
        {
          provide: BsModalService,
          useValue: {}
        }
      ],  */
    });
    service = TestBed.inject(SendDataService);
  });

  beforeEach(() => {

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setData', () => {
    let data = {
      tags: 'ABCD',
      views: 213,
      likes: 34,
      urlImg: 'https://www.google.com/'
    }
    service.setData(data);
  });

  it('setData', () => {
      service.dataModal = {
        tags: 'ABCD',
        views: 213,
        likes: 34,
        urlImg: 'https://www.google.com/'
      }

    service.sendData();
  });
});
