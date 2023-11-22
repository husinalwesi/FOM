import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsWoqodTagComponent } from './steps-woqod-tag.component';

describe('StepsWoqodTagComponent', () => {
  let component: StepsWoqodTagComponent;
  let fixture: ComponentFixture<StepsWoqodTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsWoqodTagComponent]
    });
    fixture = TestBed.createComponent(StepsWoqodTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
