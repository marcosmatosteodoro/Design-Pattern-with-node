const Creator = require('./Abstract-Creator');
const Clothes = require('./Abstract-Clothes');
class BluePants extends Creator {
  factoryMethod() {
    return new Clothes('blue pants', 50);
  }
}
module.exports = BluePants;