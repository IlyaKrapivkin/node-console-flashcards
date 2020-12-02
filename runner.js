const fs = require('fs');
const yosay = require('yosay');
const readlineSync = require('readline-sync');
const { Controler } = require('./controler.js');

let go = new Controler();
go.cycle();
