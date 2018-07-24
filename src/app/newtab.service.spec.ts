import { TestBed, inject } from '@angular/core/testing';

import { NewtabService } from './newtab.service';

describe('NewtabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewtabService]
    });
  });

  it('should be created', inject([NewtabService], (service: NewtabService) => {
    expect(service).toBeTruthy();
  }));
});
