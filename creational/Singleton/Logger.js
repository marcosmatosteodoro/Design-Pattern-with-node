class Logger {
  static _instance = null;
  data;

  constructor () {
    this.data = [];
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new Logger();
    }

    return this._instance;
  }

  addLog (log){
    this.data.push(log);
  }

  getLog () {
    return this.data;
  }
}

module.exports = Logger;