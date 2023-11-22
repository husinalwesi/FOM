import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlThirdStyleMultipleComponent } from './ddl-third-style-multiple.component';

describe('DdlThirdStyleMultipleComponent', () => {
  let component: DdlThirdStyleMultipleComponent;
  let fixture: ComponentFixture<DdlThirdStyleMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlThirdStyleMultipleComponent]
    });
    fixture = TestBed.createComponent(DdlThirdStyleMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
