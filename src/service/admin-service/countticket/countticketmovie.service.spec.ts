import { TestBed } from '@angular/core/testing';

import { CountticketmovieService } from './countticketmovie.service';

describe('CountticketmovieService', () => {
  let service: CountticketmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountticketmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
