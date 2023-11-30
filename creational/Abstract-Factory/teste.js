// Abstracts class
class CarFactory {
  choiceCarModel() {}
  buildingCarEngine() {}
  buildingCarBody() {}
  buildingCarWheels() {}
}
class Engine {
  make(){}
}
class Wheels {
  make(){}
}
class Body {
  make(){}
}
class Model {
  choice(){}
}

// Concrete class
class FordWheels extends Wheels {
  make(){
    console.log('Ford wheels build')
  }
}
class FordEngine extends Engine {
  make(){
    console.log('Ford engine build')
  }
}
class FordBody extends Body {
  make(){
    console.log('Ford body build')
  }
}
class FordModel extends Model {
  choice(model){
    console.log(model+' model chosen')
  }
}
class HondaWheels extends Wheels {
  make(){
    console.log('Honda wheels build')
  }
}
class HondaEngine extends Engine {
  make(){
    console.log('Honda engine build')
  }
}
class HondaBody extends Body {
  make(){
    console.log('Honda body build')
  }
}
class HondaModel extends Model {
  choice(model){
    console.log(model+' model chosen')
  }
}
// Factory class
class HondaFactory extends CarFactory {
  choiceCarModel() {
    return new FordModel();
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