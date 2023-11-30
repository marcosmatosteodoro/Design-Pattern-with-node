const Logger = require('./Logger')

const firstLogger = Logger.getInstance();
const secondLogger = Logger.getInstance();

firstLogger.addLog('Log 1');
firstLogger.addLog('Log 2');
firstLogger.addLog('Log 3');
firstLogger.addLog('Log 4');

const firstLog = firstLogger.getLog();
console.log('firstLog ', firstLog);

const secondLog = secondLogger.getLog();
console.log('secondLog ', secondLog);
