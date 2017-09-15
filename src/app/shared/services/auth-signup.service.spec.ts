import { TestBed, inject } from '@angular/core/testing';

import { AuthSignupService } from './auth-signup.service';

describe('AuthSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSignupService]
    });
  });

  it('should be created', inject([AuthSignupService], (service: AuthSignupService) => {
    expect(service).toBeTruthy();
  }));
});
