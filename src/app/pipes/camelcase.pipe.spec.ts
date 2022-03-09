import { CamelCasePipe } from './camelcase.pipe';

describe('CamelPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform value into camelCase', function () {
    const pipe = new CamelCasePipe();

    expect(pipe.transform('In progress')).toBe('inProgress');
  });
});
