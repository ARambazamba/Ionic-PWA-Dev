import { TestBed } from '@angular/core/testing';

import { FbGuardService } from './fb-guard.service';

describe('FbGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbGuardService = TestBed.get(FbGuardService);
    expect(service).toBeTruthy();
  });
});
