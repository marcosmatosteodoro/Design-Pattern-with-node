const Model = require('../Abstract/Model');
class FordModel extends Model {
  choice(model){
    console.log(model+' model chosen')
  }
}
module.exports = FordModel;