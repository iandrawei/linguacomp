import { ConhecimentoModule } from './conhecimento.module';

describe('ConhecimentoModule', () => {
  let conhecimentoModule: ConhecimentoModule;

  beforeEach(() => {
    conhecimentoModule = new ConhecimentoModule();
  });

  it('should create an instance', () => {
    expect(conhecimentoModule).toBeTruthy();
  });
});
