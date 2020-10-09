const fs = require('fs');
const Card = require('./model.js');
const view = require('./view.js');
const readlineSync = require('readline-sync');

class Controler {
  constructor(filename) {
    this.filename = filename;
    this.card1 = new Card(this.filename);
  }

  cycle() {
    this.card1.readCard();
    for (let i = 0; i < this.card1.questArr.length; i += 1) {
      this.card1.step = i;
      view.View.draw(this.card1);
    }
    view.View.drawFinal();
  }
}

module.exports = {Controler};
