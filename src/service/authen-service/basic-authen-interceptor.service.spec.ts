import { TestBed } from '@angular/core/testing';

import { BasicAuthenInterceptorService } from './basic-authen-interceptor.service';

describe('BasicAuthenInterceptorService', () => {
  let service: BasicAuthenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
