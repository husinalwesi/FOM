import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOfYearsNewsComponent } from './line-of-years-news.component';

describe('LineOfYearsNewsComponent', () => {
  let component: LineOfYearsNewsComponent;
  let fixture: ComponentFixture<LineOfYearsNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineOfYearsNewsComponent]
    });
    fixture = TestBed.createComponent(LineOfYearsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
