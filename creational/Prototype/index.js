Report = require('./class/Report')

const reportPrototype = new Report('Sales report', 1, 12, 2023, 107, 'Bill gates', 1000000)

const report1 = reportPrototype.clone()
const report2 = reportPrototype.clone()
const report3 = reportPrototype.clone()

report2.name = 'Marketing report'
report3.name = 'Financial report'

report1.create()
report2.create()
report3.create()