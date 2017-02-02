const stringPatterns = require('./string-patterns');

describe('Miscelaneous', () => {
  describe('string-patterns', () => {
    it('matches "abab" to "redblueredblue"', () => {
      expect(stringPatterns('abab', 'redblueredblue')).toEqual(1);
    });

    it('matches "aaaa" to "asdasdasdasd"', () => {
      expect(stringPatterns('aaaa', 'asdasdasdasd')).toEqual(1);
    });

    it('does not match "aabb" to "xyzabcxzyabc"', () => {
      expect(stringPatterns('aabb', 'xyzabcxzyabc')).toEqual(0);
    });
  });
});
