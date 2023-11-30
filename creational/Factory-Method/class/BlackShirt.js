const Creator = require('./Abstract-Creator');
const Clothes = require('./Abstract-Clothes');
class BlackShirt extends Creator {
  factoryMethod() {
    return new Clothes('black shirt', 20);
  }
}
module.exports = BlackShirt;