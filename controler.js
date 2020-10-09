const fs = require('fs');
const card = require('./model.js');
const View = require('./view.js');
const readlineSync = require('readline-sync');

class Controler {
  constructor(filename) {
    this.filename = filename;
  }

  cycle() {
    let card1 = new card.Card(this.filename);

    let string = fs.readFileSync(this.filename, 'utf8').replace(/\n{2}/, '\n').split('\n');

    for (let i = 0; i < card1.questArr.length; i += 2) {
      card1.questArr.push(string[i]);
    }
    for (let i = 1; i < card1.questArr.length; i += 2) {
      card1.ansArr.push(string[i]);
    }

    for (let i = 0; i < card1.questArr.length; i += 1) {
      card1.step = i;
      View.draw(card1);
    }
    View.drawFinal(card1);
  }
}

module.exports = {Controler};
