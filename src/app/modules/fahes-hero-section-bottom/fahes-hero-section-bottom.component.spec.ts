import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesHeroSectionBottomComponent } from './fahes-hero-section-bottom.component';

describe('FahesHeroSectionBottomComponent', () => {
  let component: FahesHeroSectionBottomComponent;
  let fixture: ComponentFixture<FahesHeroSectionBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesHeroSectionBottomComponent]
    });
    fixture = TestBed.createComponent(FahesHeroSectionBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
