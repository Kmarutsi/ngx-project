import * as from from './.actions';

describe('loads', () => {
  it('should return an action', () => {
    expect(from.loads().type).toBe('[] Load s');
  });
});
