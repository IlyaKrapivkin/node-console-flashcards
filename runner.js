const fs = require('fs');
const yosay = require('yosay');
const readlineSync = require('readline-sync');
const { Controler } = require('./controler.js');
// const {Card} = require('./model.js');
// const {View} = require('./view.js');

// let filename = process.argv[2];
// let card = new Card(filename);
// let view = new View(card);

let go = new Controler();
go.cycle();
