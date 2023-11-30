const Body = require('../Abstract/Body');
class FordBody extends Body {
  make(){
    console.log('Ford body build')
  }
}
module.exports = FordBody;