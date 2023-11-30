const Creator = require('./Abstract-Creator');
const Electronics = require('./Abstract-Electronics');
class AirConditioning extends Creator {
  factoryMethod() {
    return new Electronics('air conditioning', 2000);
  }
}
module.exports = AirConditioning;