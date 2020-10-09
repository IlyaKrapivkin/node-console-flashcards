const fs = require('fs');
// const {Controler} = require('./controler.js');
// const {View} = require('./view.js');

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
