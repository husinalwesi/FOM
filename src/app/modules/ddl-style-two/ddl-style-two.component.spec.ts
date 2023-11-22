import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlStyleTwoComponent } from './ddl-style-two.component';

describe('DdlStyleTwoComponent', () => {
  let component: DdlStyleTwoComponent;
  let fixture: ComponentFixture<DdlStyleTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlStyleTwoComponent]
    });
    fixture = TestBed.createComponent(DdlStyleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
