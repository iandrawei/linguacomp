import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaNovoComponent } from './turma-novo.component';

describe('TurmaNovoComponent', () => {
  let component: TurmaNovoComponent;
  let fixture: ComponentFixture<TurmaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
