import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioIndividualComponent } from './relatorio-individual.component';

describe('RelatorioIndividualComponent', () => {
  let component: RelatorioIndividualComponent;
  let fixture: ComponentFixture<RelatorioIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
