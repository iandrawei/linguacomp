import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioGeralDetalheComponent } from './relatorio-geral-detalhe.component';

describe('RelatorioGeralDetalheComponent', () => {
  let component: RelatorioGeralDetalheComponent;
  let fixture: ComponentFixture<RelatorioGeralDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioGeralDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioGeralDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
