const CarFactory = require('../Abstract/CarFactory')
const FordEngine = require('../Ford/FordEngine');
const FordBody = require('../Ford/FordBody');
const FordWheels = require('../Ford/FordWheels');

class FordFactory extends CarFactory {
  buildingCarEngine() {
    return new FordEngine();
  }

  buildingCarBody() {
    return new FordBody();
  }

  buildingCarWheels() {
    return new FordWheels();
  }
}
module.exports = FordFactory;