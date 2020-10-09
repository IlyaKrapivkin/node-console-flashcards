const readlineSync = require('readline-sync');
const card = require('./model.js');
const controler = require('./controler.js');

class View {
  constructor(obj) {
    this.obj = obj;
  }

  draw() {
    let answer = readlineSync.question(`${this.obj.questArr[this.obj.step]}`);
    if(answer === this.obj.ansArr[this.obj.step]) {
      console.log ('correct!');
      this.obj.score += 1;
    } else {
      console.log('Wrong!');
    }
  }

  drawFinal() {
    console.log(`CARD WAS FINISHED!\nYour score is: ${this.obj.score}/${this.obj.questArr.length}`);
  }
}

module.exports = {View};
