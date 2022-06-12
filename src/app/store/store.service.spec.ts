import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;
  let store:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: StoreService,
          useValue: {}
        }
      ], 
    });
    service = TestBed.inject(StoreService);
  });

  beforeEach(() => {
    store = {
      dispatch: jest.fn()
    }

    service = new StoreService(store);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sendDispatch', () => {
    let data = {
      tags: 'ABCD',
      views: 213,
      likes: 34,
      urlImg: 'https://www.google.com/'
    }
    service.sendDispatch(data);
  });
});
