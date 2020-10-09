const fs = require('fs');


//model of card
class Card {
  constructor(filename) {
    this.filename = filename;
    this.questArr = [];
    this.ansArr = [];
  }
  readCard() {
    let string = fs.readFileSync(filename, 'utf8')
      .replace(/\n{2}/, '\n')
      .split('\n');
    for (let i = 0; i < string.length; i += 2) {
      questArr.push(string[i]);
    };
    for (let i = 1; i < string.length; i += 2) {
      ansArr.push(string[i]);
    };
  };
};










module.exports = { Card };
