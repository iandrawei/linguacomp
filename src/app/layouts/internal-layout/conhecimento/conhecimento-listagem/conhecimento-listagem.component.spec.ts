import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentoListagemComponent } from './conhecimento-listagem.component';

describe('ConhecimentoListagemComponent', () => {
  let component: ConhecimentoListagemComponent;
  let fixture: ComponentFixture<ConhecimentoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecimentoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecimentoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
