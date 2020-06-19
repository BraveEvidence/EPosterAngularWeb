import { TestBed } from '@angular/core/testing';

import { EposterService } from './eposter.service';

describe('EposterService', () => {
  let service: EposterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EposterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
