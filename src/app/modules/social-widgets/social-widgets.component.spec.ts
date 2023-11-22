import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWidgetsComponent } from './social-widgets.component';

describe('SocialWidgetsComponent', () => {
  let component: SocialWidgetsComponent;
  let fixture: ComponentFixture<SocialWidgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialWidgetsComponent]
    });
    fixture = TestBed.createComponent(SocialWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
