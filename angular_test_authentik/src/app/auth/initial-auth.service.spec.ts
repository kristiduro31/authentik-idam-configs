import { TestBed } from '@angular/core/testing';

import { InitialAuthService } from './initial-auth.service';

describe('InitialAuthService', () => {
  let service: InitialAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
