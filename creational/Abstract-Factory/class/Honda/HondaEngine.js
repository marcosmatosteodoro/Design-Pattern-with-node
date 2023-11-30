const Engine = require('../Abstract/Engine');
class HondaEngine extends Engine {
  make(){
    console.log('Honda engine build')
  }
}
module.exports = HondaEngine;