class Validate {}

Validate.prototype.isName = (name) => {
   if (name == 'Square' | name == 'triangle' | name == 'circle' ) {
    return true;
  }
  return false;
};



module.exports = Validate;

