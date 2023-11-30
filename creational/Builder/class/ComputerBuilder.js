const Computer = require("./Computer");

class ComputerBuilder {
  constructor(){
    this.computer = new Computer()
  }

  bulderCpu(cpu){
    this.computer.cpu = cpu;
    return this;
  }

  bulderRam(ram){
    this.computer.ram = ram;
    return this;
  }

  bulderStorage(storage){
    this.computer.storage = storage;
    return this;
  }

  getComputer(){
    return this.computer;
  }
}
module.exports = ComputerBuilder;