import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDialogComponent } from './aluno-dialog.component';

describe('AlunoDialogComponent', () => {
  let component: AlunoDialogComponent;
  let fixture: ComponentFixture<AlunoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
