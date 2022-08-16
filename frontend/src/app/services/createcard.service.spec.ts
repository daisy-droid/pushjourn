import { TestBed } from '@angular/core/testing';

import { CreatecardService } from './createcard.service';

describe('CreatecardService', () => {
  let service: CreatecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
