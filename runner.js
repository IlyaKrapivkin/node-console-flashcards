// this is Ilya branch
const readlineSync = require('readline-sync');

// let userName = readlineSync.question('May I have your name?\n');
// console.log('Hi ' + userName + '!');
const fs = require('fs');
const model = require('./model.js');
const controler = require('./controler.js');
const view = require('./view.js');

let cardNew = new Start(process.argv);
cardNew.go();
