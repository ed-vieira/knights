import { TestBed } from '@angular/core/testing';

import { KnightsService } from './knights.service';

describe('KnightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnightsService = TestBed.get(KnightsService);
    expect(service).toBeTruthy();
  });
});
