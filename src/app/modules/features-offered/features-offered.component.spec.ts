import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesOfferedComponent } from './features-offered.component';

describe('FeaturesOfferedComponent', () => {
  let component: FeaturesOfferedComponent;
  let fixture: ComponentFixture<FeaturesOfferedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesOfferedComponent]
    });
    fixture = TestBed.createComponent(FeaturesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
