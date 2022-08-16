import { TestBed } from '@angular/core/testing';

import { UpdatecardService } from './updatecard.service';

describe('UpdatecardService', () => {
  let service: UpdatecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
