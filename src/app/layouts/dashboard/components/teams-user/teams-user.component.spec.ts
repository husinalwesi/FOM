import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsUserComponent } from './teams-user.component';

describe('TeamsUserComponent', () => {
  let component: TeamsUserComponent;
  let fixture: ComponentFixture<TeamsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsUserComponent]
    });
    fixture = TestBed.createComponent(TeamsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
