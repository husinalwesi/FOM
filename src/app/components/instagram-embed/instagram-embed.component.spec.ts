import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramEmbedComponent } from './instagram-embed.component';

describe('InstagramEmbedComponent', () => {
  let component: InstagramEmbedComponent;
  let fixture: ComponentFixture<InstagramEmbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramEmbedComponent]
    });
    fixture = TestBed.createComponent(InstagramEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
