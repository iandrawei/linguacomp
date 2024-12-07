import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoavaliacaoNovoComponent } from './autoavaliacao-novo.component';

describe('AutoavaliacaoNovoComponent', () => {
  let component: AutoavaliacaoNovoComponent;
  let fixture: ComponentFixture<AutoavaliacaoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoavaliacaoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoavaliacaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
