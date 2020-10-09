const fs = require('fs');
const readlineSync = require('readline-sync');

const controler = require('./controler.js');

let path = process.argv[2];
let go = new controler.Controler(path);
go.cycle();
