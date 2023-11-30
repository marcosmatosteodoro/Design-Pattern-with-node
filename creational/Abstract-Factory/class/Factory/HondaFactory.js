const CarFactory = require('../Abstract/CarFactory')
const HondaModel = require('../Honda/HondaModel');
const HondaEngine = require('../Honda/HondaEngine');
const HondaBody = require('../Honda/HondaBody');
const HondaWheels = require('../Honda/HondaWheels');

class HondaFactory extends CarFactory {
  choiceCarModel() {
    return new HondaModel();
  }

  buildingCarEngine() {
    return new HondaEngine();
  }

  buildingCarBody() {
    return new HondaBody();
  }

  buildingCarWheels() {
    return new HondaWheels();
  }
}
module.exports = HondaFactory;