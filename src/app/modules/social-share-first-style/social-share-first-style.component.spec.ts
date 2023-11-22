import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareFirstStyleComponent } from './social-share-first-style.component';

describe('SocialShareFirstStyleComponent', () => {
  let component: SocialShareFirstStyleComponent;
  let fixture: ComponentFixture<SocialShareFirstStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialShareFirstStyleComponent]
    });
    fixture = TestBed.createComponent(SocialShareFirstStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
