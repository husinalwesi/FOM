import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocailMediaIconsNewsComponent } from './socail-media-icons-news.component';

describe('SocailMediaIconsNewsComponent', () => {
  let component: SocailMediaIconsNewsComponent;
  let fixture: ComponentFixture<SocailMediaIconsNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocailMediaIconsNewsComponent]
    });
    fixture = TestBed.createComponent(SocailMediaIconsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
