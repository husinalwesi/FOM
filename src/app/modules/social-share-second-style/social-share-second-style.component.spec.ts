import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareSecondStyleComponent } from './social-share-second-style.component';

describe('SocialShareSecondStyleComponent', () => {
  let component: SocialShareSecondStyleComponent;
  let fixture: ComponentFixture<SocialShareSecondStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialShareSecondStyleComponent]
    });
    fixture = TestBed.createComponent(SocialShareSecondStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
