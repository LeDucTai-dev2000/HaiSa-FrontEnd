import { TestBed } from '@angular/core/testing';

import { ShowtimesService } from './showtimes.service';

describe('ShowitmesService', () => {
  let service: ShowtimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowtimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
