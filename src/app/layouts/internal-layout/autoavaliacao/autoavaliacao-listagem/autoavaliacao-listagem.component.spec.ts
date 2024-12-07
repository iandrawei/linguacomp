import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoavaliacaoListagemComponent } from './autoavaliacao-listagem.component';

describe('AutoavaliacaoListagemComponent', () => {
  let component: AutoavaliacaoListagemComponent;
  let fixture: ComponentFixture<AutoavaliacaoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoavaliacaoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoavaliacaoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
