import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtitudeListagemComponent } from './atitude-listagem.component';

describe('AtitudeListagemComponent', () => {
  let component: AtitudeListagemComponent;
  let fixture: ComponentFixture<AtitudeListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtitudeListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtitudeListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
