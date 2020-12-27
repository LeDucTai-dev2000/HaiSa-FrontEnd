import { TestBed } from '@angular/core/testing';

import { TotalcinemaService } from './totalcinema.service';

describe('TotalcinemaService', () => {
  let service: TotalcinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalcinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
