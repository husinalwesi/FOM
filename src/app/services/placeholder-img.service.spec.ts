import { TestBed } from '@angular/core/testing';

import { PlaceholderImgService } from './placeholder-img.service';

describe('PlaceholderImgService', () => {
  let service: PlaceholderImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
