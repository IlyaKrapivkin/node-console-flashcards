const fs = require('fs');

class Card {
  constructor(filename) {
    this.filename = filename;
    this.questArr = [];
    this.ansArr = [];
    this.step = 0;
    this.score = 0;
  }
}

module.exports = { Card };
