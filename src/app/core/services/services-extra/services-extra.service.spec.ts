import { TestBed } from '@angular/core/testing';

import { ServicesExtraService } from './services-extra.service';

describe('ServicesExtraService', () => {
  let service: ServicesExtraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesExtraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
