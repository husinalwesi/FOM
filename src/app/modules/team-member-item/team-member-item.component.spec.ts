import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberItemComponent } from './team-member-item.component';

describe('TeamMemberItemComponent', () => {
  let component: TeamMemberItemComponent;
  let fixture: ComponentFixture<TeamMemberItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMemberItemComponent]
    });
    fixture = TestBed.createComponent(TeamMemberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
