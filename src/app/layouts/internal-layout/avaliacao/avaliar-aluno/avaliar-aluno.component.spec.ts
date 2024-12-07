import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarAlunoComponent } from './avaliar-aluno.component';

describe('AvaliarAlunoComponent', () => {
  let component: AvaliarAlunoComponent;
  let fixture: ComponentFixture<AvaliarAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliarAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
