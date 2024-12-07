import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaRespostaComponent } from './tarefa-resposta.component';

describe('TarefaRespostaComponent', () => {
  let component: TarefaRespostaComponent;
  let fixture: ComponentFixture<TarefaRespostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaRespostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
