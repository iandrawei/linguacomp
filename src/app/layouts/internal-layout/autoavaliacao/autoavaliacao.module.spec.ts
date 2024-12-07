import { AutoavaliacaoModule } from './autoavaliacao.module';

describe('AutoavaliacaoModule', () => {
  let autoavaliacaoModule: AutoavaliacaoModule;

  beforeEach(() => {
    autoavaliacaoModule = new AutoavaliacaoModule();
  });

  it('should create an instance', () => {
    expect(autoavaliacaoModule).toBeTruthy();
  });
});
