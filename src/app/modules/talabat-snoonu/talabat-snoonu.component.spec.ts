import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalabatSnoonuComponent } from './talabat-snoonu.component';

describe('TalabatSnoonuComponent', () => {
  let component: TalabatSnoonuComponent;
  let fixture: ComponentFixture<TalabatSnoonuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalabatSnoonuComponent]
    });
    fixture = TestBed.createComponent(TalabatSnoonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
