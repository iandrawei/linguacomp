import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoavaliacaoComponent } from './autoavaliacao.component';

describe('AutoavaliacaoComponent', () => {
  let component: AutoavaliacaoComponent;
  let fixture: ComponentFixture<AutoavaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoavaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoavaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
