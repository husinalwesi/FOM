import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlStanderMultiComponent } from './ddl-stander-multi.component';

describe('DdlStanderMultiComponent', () => {
  let component: DdlStanderMultiComponent;
  let fixture: ComponentFixture<DdlStanderMultiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlStanderMultiComponent]
    });
    fixture = TestBed.createComponent(DdlStanderMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
