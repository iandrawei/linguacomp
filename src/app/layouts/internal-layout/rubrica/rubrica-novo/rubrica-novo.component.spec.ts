import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaNovoComponent } from './rubrica-novo.component';

describe('RubricaNovoComponent', () => {
  let component: RubricaNovoComponent;
  let fixture: ComponentFixture<RubricaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
