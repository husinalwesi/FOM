import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAccountWidgetComponent } from './social-account-widget.component';

describe('SocialAccountWidgetComponent', () => {
  let component: SocialAccountWidgetComponent;
  let fixture: ComponentFixture<SocialAccountWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialAccountWidgetComponent]
    });
    fixture = TestBed.createComponent(SocialAccountWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
