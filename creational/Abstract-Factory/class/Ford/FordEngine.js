const Engine = require('../Abstract/Engine');
class FordEngine extends Engine {
  make(){
    console.log('Ford engine build')
  }
}
module.exports = FordEngine;