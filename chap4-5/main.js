// main.js

// import a file module by specifiying a file name with path
// here, the module is in the same folder as main.js
var d = require('./dice.js');

// now the exported functions are accessible as
//   d.rollDice, d.rollDiceN, and d.drawOne
var letters = 'ABCDEFG'.split('');
console.log(`Roll dice 10 times: ${d.rollDiceN(10)}`);
console.log(`Draw a letter from 'ABCDEFG': ${d.drawOne(letters)}`);
