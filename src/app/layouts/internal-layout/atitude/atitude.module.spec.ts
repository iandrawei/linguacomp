import { AtitudeModule } from './atitude.module';

describe('AtitudeModule', () => {
  let atitudeModule: AtitudeModule;

  beforeEach(() => {
    atitudeModule = new AtitudeModule();
  });

  it('should create an instance', () => {
    expect(atitudeModule).toBeTruthy();
  });
});
