const Model = require('../Abstract/Model');
class HondaModel extends Model {
  choice(model){
    console.log(model+' model chosen')
  }
}
module.exports = HondaModel;