const logotest = require('../lib/title.js')


describe('Check', () => {
 
  describe('Length', () => {
    it('checklength of logo name', () => {
      const validate = new logotest();
      const result = validate.isName('BIS');

      expect(result).toEqual(true);
    });
  });

  describe('Uppercase', () => {
    it('name all should be uppercase', () => {
      const validate = new logotest();
      const result = validate.isName('BIS');

      expect(result).toEqual(true);
    });
  });
});