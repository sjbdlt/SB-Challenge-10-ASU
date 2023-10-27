const shapetest = require('../lib/shapes.js')


describe('CheckShape', () => {
 
  describe('shape', () => {
    it('check to see if shape is a match', () => {
      const validate = new shapetest();
      const result = validate.isName('Square');

      expect(result).toEqual(true);
    });
  });  
});