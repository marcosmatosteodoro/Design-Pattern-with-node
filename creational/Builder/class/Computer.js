class Computer {
  constructor(){
    this.cpu = ''
    this.ram = ''
    this.storage = ''
  }
  showComputer(){
    console.log(`CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}`)
  }
}
module.exports = Computer;