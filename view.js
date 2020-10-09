const readlineSync = require('readline-sync');

class View {
  constructor(card) {
    this.card = card;
  }

  draw() {
    let answer = readlineSync.question(`${this.card.questArr[this.card.step]}\n`);
    if (answer === this.card.ansArr[this.card.step]) {
      console.log ('Correct!\n');
      this.card.score += 1;
    } else {
      console.log('Wrong!\n');
    }
  }

  drawFinal() {
    console.log(`CARD WAS FINISHED!\nYour score is: ${this.card.score}/${this.card.questArr.length}`);
  }
}

module.exports = {View};
