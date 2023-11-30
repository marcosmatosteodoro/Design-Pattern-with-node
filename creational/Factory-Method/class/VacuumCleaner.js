const Creator = require('./Abstract-Creator');
const Electronics = require('./Abstract-Electronics');
class VacuumCleaner extends Creator {
  factoryMethod() {
    return new Electronics('vacuum cleaner', 150);
  }
}
module.exports = VacuumCleaner;