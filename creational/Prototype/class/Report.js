class Report {
  constructor(name, day, month, year, clients, admin, sales) {
    this.name = name
    this.day = day
    this.month = month
    this.year = year
    this.clients = clients
    this.admin = admin
    this.sales = sales
  }
  create(){
    console.log(`Report ${this.name} created at ${this.day}/${this.month}/${this.year} by ${this.admin} with ${this.clients} new clients and ${this.sales} sales`)
  }

  clone() {
    return Object.create(this);
  }
}
module.exports = Report;