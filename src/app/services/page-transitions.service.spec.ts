import { TestBed } from '@angular/core/testing';

import { PageTransitionsService } from './page-transitions.service';

describe('PageTransitionsService', () => {
  let service: PageTransitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTransitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
