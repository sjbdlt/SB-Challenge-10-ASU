class Validate {}

Validate.prototype.isName = (name) => {
 
  if (name.length > 2) {
    return true;
  }

  const pattern = new RegExp('(?=.*[A-Z])');

  if (pattern.test(name)) {
    return true;
  }

  return false;
};

module.exports = Validate;
