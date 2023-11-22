import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestETagComponent } from './request-e-tag.component';

describe('RequestETagComponent', () => {
  let component: RequestETagComponent;
  let fixture: ComponentFixture<RequestETagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestETagComponent]
    });
    fixture = TestBed.createComponent(RequestETagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
