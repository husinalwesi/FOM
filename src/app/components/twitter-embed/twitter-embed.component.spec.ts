import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterEmbedComponent } from './twitter-embed.component';

describe('TwitterEmbedComponent', () => {
  let component: TwitterEmbedComponent;
  let fixture: ComponentFixture<TwitterEmbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterEmbedComponent]
    });
    fixture = TestBed.createComponent(TwitterEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
