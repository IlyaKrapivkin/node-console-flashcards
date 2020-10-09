const fs = require('fs');

class Card {
  constructor(path) {
    this.path = path;
    this.arrQ = [];
    this.arrA = [];
    this.step = 0;
    this.score = 0;
  }

  readCard() {
    let string = fs.readFileSync(this.path, 'utf8').replace(/\n{2}/g, '\n').replace(/\n$/, '').split('\n');
    for (let i = 0; i < string.length; i += 2) {
      this.arrQ.push(string[i]);
    }
    for (let j = 1; j < string.length; j += 2) {
      this.arrA.push(string[j]);
    }
  }
}

module.exports = { Card };
