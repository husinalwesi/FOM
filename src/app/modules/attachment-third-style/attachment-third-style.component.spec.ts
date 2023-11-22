import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentThirdStyleComponent } from './attachment-third-style.component';

describe('AttachmentThirdStyleComponent', () => {
  let component: AttachmentThirdStyleComponent;
  let fixture: ComponentFixture<AttachmentThirdStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachmentThirdStyleComponent]
    });
    fixture = TestBed.createComponent(AttachmentThirdStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
