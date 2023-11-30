class Creator {
  factoryMethod() {
    throw new Error('Subclasses must override this method');
  }
}

module.exports = Creator;