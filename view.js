const readlineSync = require('readline-sync');

class View {
  constructor(card) {
    this.card = card;
  }

  firstCard() {
    let strFirst = this.card.path.split('_')[0].toUpperCase();
    console.log(`======${strFirst}=====`);
  }

  draw() {
    let answer = readlineSync.question(`${this.card.arrQ[this.card.step]}\n`);
    if (answer === this.card.arrA[this.card.step]) {
      console.log ('Correct!\n');
      this.card.score += 1;
    } else {
      console.log('Wrong!\n');
    }
  }

  drawFinal() {
    console.log(`CARD WAS FINISHED!\nYour score is: ${this.card.score}/${this.card.arrQ.length}\n`);
  }

  end() {
    let scoreString = `${this.card[0]}/6  ${this.card[1]}/6  ${this.card[2]}/6`;
    console.log(`\nTHE END! YOUR TOTAL SCORE IS: ${scoreString}`);
  }
}

module.exports = {View};
