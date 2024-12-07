import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaListagemComponent } from './competencia-listagem.component';

describe('CompetenciaListagemComponent', () => {
  let component: CompetenciaListagemComponent;
  let fixture: ComponentFixture<CompetenciaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
