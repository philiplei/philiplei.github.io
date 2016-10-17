// main.js, in the same folder
var d = require('./dice.js');
var letters = 'ABCDEFG'.split('');
console.log(`Roll dice 10 times: ${d.rollDiceN(10)}`);
console.log(`Draw a letter from 'ABCDEFG': ${d.drawOne(letters)}`);
