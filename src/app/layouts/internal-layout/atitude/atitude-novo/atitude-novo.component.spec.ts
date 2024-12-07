import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtitudeNovoComponent } from './atitude-novo.component';

describe('AtitudeNovoComponent', () => {
  let component: AtitudeNovoComponent;
  let fixture: ComponentFixture<AtitudeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtitudeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtitudeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
