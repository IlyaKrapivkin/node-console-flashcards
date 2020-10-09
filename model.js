const fs = require('fs');
const controler = require('./controler.js');
const view = require('./view.js');

//model of card
class Card {
  constructor(filename) {
    this.filename = filename;
    this.questArr = [];
    this.ansArr = [];
    this.step = 0;
    this.score = 0;
  }

  readCard() {
    let string = fs.readFileSync(this.filename, 'utf8').replace(/\n{2}/, '\n').split('\n');
    for (let i = 0; i < this.string.length; i += 2) {
      this.questArr.push(string[i]);
    }
    for (let i = 1; i < this.string.length; i += 2) {
      this.ansArr.push(string[i]);
    }
  }
}

module.exports = { Card };
