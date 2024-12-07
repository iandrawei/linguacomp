import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentoNovoComponent } from './conhecimento-novo.component';

describe('ConhecimentoNovoComponent', () => {
  let component: ConhecimentoNovoComponent;
  let fixture: ComponentFixture<ConhecimentoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecimentoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecimentoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
