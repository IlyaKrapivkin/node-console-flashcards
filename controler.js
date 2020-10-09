const fs = require('fs');
const readlineSync = require('readline-sync');
const { Card } = require('./model.js');
const { View } = require('./view.js');

class Controler {
  constructor() {
    this.arrPaths = ['nighthawk_flashcard_data.txt',
      'otter_flashcard_data.txt',
      'raccoon_flashcard_data.txt'];
    this.arrScore = [0, 0, 0];
  }

  cycle() {
    function change(arr) {
      return arr.sort(() => Math.round(Math.random() * 100) - 50);
    }
    this.arrPaths = change(this.arrPaths);

    for (let i = 0; i < this.arrPaths.length; i += 1) {
      let card = new Card(this.arrPaths[i]);
      card.readCard();
      let view = new View(card);
      view.firstCard();

      for (let j = 0; j < card.arrQ.length; j += 1) {
        card.step = j;
        view.draw();
      }
      view.drawFinal();
      this.arrScore[i] += card.score;
    }
    let viewEnd = new View(this.arrScore);
    viewEnd.end();
  }
}

module.exports = {Controler};
