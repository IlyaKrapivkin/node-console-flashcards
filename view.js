const readlineSync = require('readline-sync');
const yosay = require('yosay');

class View {
  constructor(card) {
    this.card = card;
  }

  firstCard() {
    let strFirst = this.card.path.split('_')[0].toUpperCase();
    console.log(`======${strFirst}=====`);
  }

  draw() {
    let answer = readlineSync.question(`${this.card.arrQ[this.card.step]}-----> `);
    if (answer === this.card.arrA[this.card.step]) {
      console.log ('\x1b[32m%s\x1b[0m', 'Correct!');
      this.card.score += 1;
    } else {
      console.log('\x1b[31m%s\x1b[0m', 'Wrong!');
    }
  }

  drawFinal() {
    console.log(`CARD WAS FINISHED!\nYour score is: ${this.card.score}/${this.card.arrQ.length}\n`);
  }

  end() {
    let scoreString = `${this.card[0]}/6  ${this.card[1]}/6  ${this.card[2]}/6`;
    console.log(yosay(`\nTHE END! YOUR TOTAL SCORE IS: ${scoreString}`));
  }
}

module.exports = {View};
