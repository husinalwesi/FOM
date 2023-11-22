import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAboutUsComponent } from './detailed-about-us.component';

describe('DetailedAboutUsComponent', () => {
  let component: DetailedAboutUsComponent;
  let fixture: ComponentFixture<DetailedAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedAboutUsComponent]
    });
    fixture = TestBed.createComponent(DetailedAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
