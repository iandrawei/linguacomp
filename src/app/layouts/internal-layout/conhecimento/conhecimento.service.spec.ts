import { TestBed } from '@angular/core/testing';

import { ConhecimentoService } from './conhecimento.service';

describe('ConhecimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConhecimentoService = TestBed.get(ConhecimentoService);
    expect(service).toBeTruthy();
  });
});
