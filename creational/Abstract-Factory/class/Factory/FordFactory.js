const CarFactory = require('../Abstract/CarFactory')
const FordEngine = require('../Ford/FordEngine');
const FordBody = require('../Ford/FordBody');
const FordWheels = require('../Ford/FordWheels');
const FordModel = require('../Ford/FordModel');
class FordFactory extends CarFactory {
  choiceCarModel() {
    return new FordModel();
  }

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