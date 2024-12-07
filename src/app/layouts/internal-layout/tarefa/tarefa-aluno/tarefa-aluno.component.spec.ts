import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAlunoComponent } from './tarefa-aluno.component';

describe('TarefaAlunoComponent', () => {
  let component: TarefaAlunoComponent;
  let fixture: ComponentFixture<TarefaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
