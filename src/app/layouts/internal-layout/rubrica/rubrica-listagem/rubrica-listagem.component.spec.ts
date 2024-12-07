import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaListagemComponent } from './rubrica-listagem.component';

describe('RubricaListagemComponent', () => {
  let component: RubricaListagemComponent;
  let fixture: ComponentFixture<RubricaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
