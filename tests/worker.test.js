const testWorker = require('../server/workers');

describe('Testing worker functions', () => {
  
  describe('testWorker', () => {
    it('Returns undefined if input is null', () => {
      const input = null;
      const expected = undefined;

      expect(testWorker(input)).toBe(expected);
    });

  });

});
