import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaNovoComponent } from './tarefa-novo.component';

describe('TarefaNovoComponent', () => {
  let component: TarefaNovoComponent;
  let fixture: ComponentFixture<TarefaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
