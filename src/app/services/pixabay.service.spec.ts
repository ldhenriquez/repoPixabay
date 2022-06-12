import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PixabayService } from './pixabay.service';

describe('PixabayService', () => {
  let service: PixabayService;
  const http = {
    get: jest.fn()
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PixabayService);
  });

  beforeEach(() => {

    service = new PixabayService(http as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getImages', () => {
    jest.spyOn(http, 'get').mockReturnValue(true);
    service.getImages();
  });

  it('getDropdown', () => {
    jest.spyOn(http, 'get').mockReturnValue(true);
    service.getDropdown('portatil');
  });

  it('getFilterType', () => {
    jest.spyOn(http, 'get').mockReturnValue(true);
    service.getFilterType('portatil');
  });
});
