import { TestBed } from '@angular/core/testing';

import { LoadAssetsService } from './load-assets.service';

describe('LoadAssetsService', () => {
  let service: LoadAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
