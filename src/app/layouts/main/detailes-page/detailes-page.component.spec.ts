import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesPageComponent } from './detailes-page.component';

describe('DetailesPageComponent', () => {
  let component: DetailesPageComponent;
  let fixture: ComponentFixture<DetailesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailesPageComponent]
    });
    fixture = TestBed.createComponent(DetailesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
