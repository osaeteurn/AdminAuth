import { TestBed, inject } from '@angular/core/testing';

import { ValidateSignupService } from './validate-signup.service';

describe('ValidateSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateSignupService]
    });
  });

  it('should be created', inject([ValidateSignupService], (service: ValidateSignupService) => {
    expect(service).toBeTruthy();
  }));
});
