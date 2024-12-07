import { TestBed } from '@angular/core/testing';

import { AtitudeService } from './atitude.service';

describe('AtitudeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtitudeService = TestBed.get(AtitudeService);
    expect(service).toBeTruthy();
  });
});
