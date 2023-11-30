const FordFactory = require('./class/Factory/FordFactory');
const HondaFactory = require('./class/Factory/HondaFactory');

function runApplication(factory, modelCar) {
  const model = factory.choiceCarModel();
  const engine = factory.buildingCarEngine();
  const body = factory.buildingCarBody();
  const wheels = factory.buildingCarWheels();

  model.choice(modelCar)
  engine.make();
  body.make();
  wheels.make();
}

const fordFactory = new FordFactory();
const hondaFactory = new HondaFactory();

runApplication(fordFactory, 'SUV');
runApplication(hondaFactory, 'Pickup');