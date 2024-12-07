import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadeNovoComponent } from './habilidade-novo.component';

describe('HabilidadeNovoComponent', () => {
  let component: HabilidadeNovoComponent;
  let fixture: ComponentFixture<HabilidadeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
