import { MzModule } from './mz.module';

describe('MzModule', () => {
  let mzModule: MzModule;

  beforeEach(() => {
    mzModule = new MzModule();
  });

  it('should create an instance', () => {
    expect(mzModule).toBeTruthy();
  });
});
