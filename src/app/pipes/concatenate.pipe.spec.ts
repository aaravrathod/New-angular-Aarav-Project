import { ConcatenatePipe } from './concatenate.pipe';

describe('ConcatinatePipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenatePipe();
    expect(pipe).toBeTruthy();
  });
});
