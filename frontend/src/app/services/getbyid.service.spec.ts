import { TestBed } from '@angular/core/testing';

import { GetbyidService } from './getbyid.service';

describe('GetbyidService', () => {
  let service: GetbyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetbyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
