const BluePants = require('./class/BluePants');
const BlackShirt = require('./class/BlackShirt');
const AirConditioning = require('./class/AirConditioning');
const VacuumCleaner = require('./class/VacuumCleaner');

const makeBlackShirt = new BlackShirt();
const makeBluePants = new BluePants();
const makeVacuumCleaner = new VacuumCleaner();
const makeAirConditioning = new AirConditioning();

const blackShirt = makeBlackShirt.factoryMethod();
const bluePants = makeBluePants.factoryMethod();
const vacuumCleaner = makeVacuumCleaner.factoryMethod();
const airConditioning = makeAirConditioning.factoryMethod();

blackShirt.sell();
bluePants.sell();
vacuumCleaner.sell();
airConditioning.sell();