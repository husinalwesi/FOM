import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentSecondStyleComponent } from './attachment-second-style.component';

describe('AttachmentSecondStyleComponent', () => {
  let component: AttachmentSecondStyleComponent;
  let fixture: ComponentFixture<AttachmentSecondStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachmentSecondStyleComponent]
    });
    fixture = TestBed.createComponent(AttachmentSecondStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
