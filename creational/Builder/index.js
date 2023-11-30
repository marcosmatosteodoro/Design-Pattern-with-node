ComputerBuilder = require('./class/ComputerBuilder')

const computerBuilder = new ComputerBuilder();

const myComputer = computerBuilder
  .bulderCpu('i7')
  .bulderRam('16GB')
  .bulderStorage('1TB')
  .getComputer();

myComputer.showComputer();