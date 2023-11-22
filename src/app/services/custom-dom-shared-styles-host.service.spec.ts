import { TestBed } from '@angular/core/testing';

import { CustomDomSharedStylesHostService } from './custom-dom-shared-styles-host.service';

describe('CustomDomSharedStylesHostService', () => {
  let service: CustomDomSharedStylesHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDomSharedStylesHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
