const readline = require("readline");
const { inicializarFicheiro } = require("./ficheiro");
const menu = require("./menu");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inicializarFicheiro();
menu(rl);