import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlStanderComponent } from './ddl-stander.component';

describe('DdlStanderComponent', () => {
  let component: DdlStanderComponent;
  let fixture: ComponentFixture<DdlStanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlStanderComponent]
    });
    fixture = TestBed.createComponent(DdlStanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
