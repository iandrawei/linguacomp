import { CompetenciaModule } from './competencia.module';

describe('CompetenciaModule', () => {
  let competenciaModule: CompetenciaModule;

  beforeEach(() => {
    competenciaModule = new CompetenciaModule();
  });

  it('should create an instance', () => {
    expect(competenciaModule).toBeTruthy();
  });
});
