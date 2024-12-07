import { RelatorioModule } from './relatorio.module';

describe('RelatorioModule', () => {
  let relatorioModule: RelatorioModule;

  beforeEach(() => {
    relatorioModule = new RelatorioModule();
  });

  it('should create an instance', () => {
    expect(relatorioModule).toBeTruthy();
  });
});
