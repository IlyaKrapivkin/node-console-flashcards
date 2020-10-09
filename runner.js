const fs = require('fs');
const readlineSync = require('readline-sync');
const card = require('./model.js');
const controler = require('./controler.js');
const view = require('./view.js');

let go = new controler.Controler(process.argv);
go.cycle();
