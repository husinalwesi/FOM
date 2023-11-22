import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesTrafficServiceComponent } from './fahes-traffic-service.component';

describe('FahesTrafficServiceComponent', () => {
  let component: FahesTrafficServiceComponent;
  let fixture: ComponentFixture<FahesTrafficServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesTrafficServiceComponent]
    });
    fixture = TestBed.createComponent(FahesTrafficServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
