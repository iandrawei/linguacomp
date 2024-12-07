import { CriterioModule } from './criterio.module';

describe('CriterioModule', () => {
  let criterioModule: CriterioModule;

  beforeEach(() => {
    criterioModule = new CriterioModule();
  });

  it('should create an instance', () => {
    expect(criterioModule).toBeTruthy();
  });
});
