import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLeadershipComponent } from './our-leadership.component';

describe('OurLeadershipComponent', () => {
  let component: OurLeadershipComponent;
  let fixture: ComponentFixture<OurLeadershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLeadershipComponent]
    });
    fixture = TestBed.createComponent(OurLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
