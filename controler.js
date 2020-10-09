const fs = require('fs');
const model = require('./model.js');
const readlineSync = require('readline-sync');

class Start {
  constructor(filename) {
    this.filename = filename;
  }

  go() {
    let card1 = new Card (this.filename);
    card1.readCard();
  }
}

module.exports = {Start};
