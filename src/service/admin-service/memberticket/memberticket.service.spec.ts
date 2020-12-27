import { TestBed } from '@angular/core/testing';

import { MemberticketService } from './memberticket.service';

describe('MemberticketService', () => {
  let service: MemberticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
