import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInnerComponent } from './profile-inner.component';

describe('ProfileInnerComponent', () => {
  let component: ProfileInnerComponent;
  let fixture: ComponentFixture<ProfileInnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInnerComponent]
    });
    fixture = TestBed.createComponent(ProfileInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
