import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlStyleSecondComponent } from './ddl-style-second.component';

describe('DdlStyleSecondComponent', () => {
  let component: DdlStyleSecondComponent;
  let fixture: ComponentFixture<DdlStyleSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlStyleSecondComponent]
    });
    fixture = TestBed.createComponent(DdlStyleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
