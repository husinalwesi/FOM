import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAddNewComponent } from './teams-add-new.component';

describe('TeamsAddNewComponent', () => {
  let component: TeamsAddNewComponent;
  let fixture: ComponentFixture<TeamsAddNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsAddNewComponent]
    });
    fixture = TestBed.createComponent(TeamsAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
