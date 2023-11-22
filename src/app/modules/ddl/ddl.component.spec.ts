import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlComponent } from './ddl.component';

describe('DdlComponent', () => {
  let component: DdlComponent;
  let fixture: ComponentFixture<DdlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlComponent]
    });
    fixture = TestBed.createComponent(DdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
