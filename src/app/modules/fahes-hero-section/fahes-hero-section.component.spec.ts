import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesHeroSectionComponent } from './fahes-hero-section.component';

describe('FahesHeroSectionComponent', () => {
  let component: FahesHeroSectionComponent;
  let fixture: ComponentFixture<FahesHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesHeroSectionComponent]
    });
    fixture = TestBed.createComponent(FahesHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
