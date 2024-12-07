import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadeListagemComponent } from './habilidade-listagem.component';

describe('HabilidadeListagemComponent', () => {
  let component: HabilidadeListagemComponent;
  let fixture: ComponentFixture<HabilidadeListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadeListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadeListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
