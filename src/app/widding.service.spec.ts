import { TestBed } from '@angular/core/testing';

import { WiddingService } from './widding.service';

describe('WiddingService', () => {
  let service: WiddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WiddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
