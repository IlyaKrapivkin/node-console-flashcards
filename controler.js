const fs = require('fs');
const readlineSync = require('readline-sync');
// const {Card} = require('./model.js');
// const {View} = require('./view.js');

class Controler {
  constructor(filename, card, view) {
    this.filename = filename;
    this.card = card;
    this.view = view;
  }

  readCard() {
    let string = fs.readFileSync(this.filename, 'utf8').replace(/\n{2}/g, '\n').replace(/\n$/, '').split('\n');
    for (let i = 0; i < string.length; i += 2) {
      this.card.questArr.push(string[i]);
    }
    for (let j = 1; j < string.length; j += 2) {
      this.card.ansArr.push(string[j]);
    }
  }

  cycle() {
    this.readCard();

    for (let i = 0; i < this.card.questArr.length; i += 1) {
      this.card.step = i;
      this.view.draw();
    }
    this.view.drawFinal();
  }
}

module.exports = {Controler};
