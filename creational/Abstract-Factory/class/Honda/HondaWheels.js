const Wheels = require('../Abstract/Wheels');
class HondaWheels extends Wheels {
  make(){
    console.log('Honda wheels build')
  }
}
module.exports = HondaWheels;