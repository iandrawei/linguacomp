import { RubricaModule } from './rubrica.module';

describe('RubricaModule', () => {
  let rubricaModule: RubricaModule;

  beforeEach(() => {
    rubricaModule = new RubricaModule();
  });

  it('should create an instance', () => {
    expect(rubricaModule).toBeTruthy();
  });
});
