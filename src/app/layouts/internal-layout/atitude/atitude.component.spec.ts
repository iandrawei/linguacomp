import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtitudeComponent } from './atitude.component';

describe('AtitudeComponent', () => {
  let component: AtitudeComponent;
  let fixture: ComponentFixture<AtitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
