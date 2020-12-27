import { TestBed } from '@angular/core/testing';

import { GenremovieService } from './genremovie.service';

describe('GenremovieService', () => {
  let service: GenremovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenremovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
