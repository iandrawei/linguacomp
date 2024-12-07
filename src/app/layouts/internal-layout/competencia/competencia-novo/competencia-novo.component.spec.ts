import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaNovoComponent } from './competencia-novo.component';

describe('CompetenciaNovoComponent', () => {
  let component: CompetenciaNovoComponent;
  let fixture: ComponentFixture<CompetenciaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
