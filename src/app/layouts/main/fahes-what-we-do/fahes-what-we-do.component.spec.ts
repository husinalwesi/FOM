import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesWhatWeDoComponent } from './fahes-what-we-do.component';

describe('FahesWhatWeDoComponent', () => {
  let component: FahesWhatWeDoComponent;
  let fixture: ComponentFixture<FahesWhatWeDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesWhatWeDoComponent]
    });
    fixture = TestBed.createComponent(FahesWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
