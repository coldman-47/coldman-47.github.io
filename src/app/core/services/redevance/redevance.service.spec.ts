import { TestBed } from '@angular/core/testing';

import { RedevanceService } from './redevance.service';

describe('RedevanceService', () => {
  let service: RedevanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedevanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
