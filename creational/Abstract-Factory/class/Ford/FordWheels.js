const Wheels = require('../Abstract/Wheels');
class FordWheels extends Wheels {
  make(){
    console.log('Ford wheels build')
  }
}
module.exports = FordWheels;