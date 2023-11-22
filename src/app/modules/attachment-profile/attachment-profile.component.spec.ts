import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentProfileComponent } from './attachment-profile.component';

describe('AttachmentProfileComponent', () => {
  let component: AttachmentProfileComponent;
  let fixture: ComponentFixture<AttachmentProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachmentProfileComponent]
    });
    fixture = TestBed.createComponent(AttachmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
