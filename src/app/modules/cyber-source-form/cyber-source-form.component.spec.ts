import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSourceFormComponent } from './cyber-source-form.component';

describe('CyberSourceFormComponent', () => {
  let component: CyberSourceFormComponent;
  let fixture: ComponentFixture<CyberSourceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberSourceFormComponent]
    });
    fixture = TestBed.createComponent(CyberSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
