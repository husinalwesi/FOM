import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareersHomepageComponent } from './careers-homepage.component';

describe('CareersComponent', () => {
  let component: CareersHomepageComponent;
  let fixture: ComponentFixture<CareersHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareersHomepageComponent]
    });
    fixture = TestBed.createComponent(CareersHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
