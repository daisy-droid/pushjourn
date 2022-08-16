import { TestBed } from '@angular/core/testing';

import { DeletecardService } from './deletecard.service';

describe('DeletecardService', () => {
  let service: DeletecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
