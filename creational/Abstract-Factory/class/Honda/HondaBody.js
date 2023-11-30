const Body = require('../Abstract/Body');
class HondaBody extends Body {
  make(){
    console.log('Honda body build')
  }
}
module.exports = HondaBody;