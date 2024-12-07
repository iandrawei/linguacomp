import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovoComponent } from './cadastro-novo.component';

describe('CadastroNovoComponent', () => {
  let component: CadastroNovoComponent;
  let fixture: ComponentFixture<CadastroNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
