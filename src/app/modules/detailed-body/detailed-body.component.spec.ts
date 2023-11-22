import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBodyComponent } from './detailed-body.component';

describe('DetailedBodyComponent', () => {
  let component: DetailedBodyComponent;
  let fixture: ComponentFixture<DetailedBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedBodyComponent]
    });
    fixture = TestBed.createComponent(DetailedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
