import { HabilidadeModule } from './habilidade.module';

describe('HabilidadeModule', () => {
  let habilidadeModule: HabilidadeModule;

  beforeEach(() => {
    habilidadeModule = new HabilidadeModule();
  });

  it('should create an instance', () => {
    expect(habilidadeModule).toBeTruthy();
  });
});
