class Product {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
  sell(){
    const now = () => new Date().toLocaleString()
    console.log(`Product ${this.name} sold by ${this.price} on ${now()}`)
  }
}

module.exports = Product;