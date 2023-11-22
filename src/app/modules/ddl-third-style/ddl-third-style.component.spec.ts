import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlThirdStyleComponent } from './ddl-third-style.component';

describe('DdlThirdStyleComponent', () => {
  let component: DdlThirdStyleComponent;
  let fixture: ComponentFixture<DdlThirdStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlThirdStyleComponent]
    });
    fixture = TestBed.createComponent(DdlThirdStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
