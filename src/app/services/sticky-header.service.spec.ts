import { TestBed } from '@angular/core/testing';

import { StickyHeaderService } from './sticky-header.service';

describe('StickyHeaderService', () => {
  let service: StickyHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickyHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
