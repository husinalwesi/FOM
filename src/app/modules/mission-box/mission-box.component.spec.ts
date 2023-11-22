import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBoxComponent } from './mission-box.component';

describe('MissionBoxComponent', () => {
  let component: MissionBoxComponent;
  let fixture: ComponentFixture<MissionBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionBoxComponent]
    });
    fixture = TestBed.createComponent(MissionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
