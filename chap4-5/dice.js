// module dice.js

// private function
function randomInteger(min,max) {
  return Math.floor(Math.random()*(max-min+1)) + min;
}

// functions to be exported
function rollDice() { return randomInteger(1,6); }

function rollDiceN(n) {
  var ans = [];
  for (var k=0; k<n; k++) { ans.push(randomInteger(1,6)); }
  return ans;
}

function drawOne(items) {
  // assume item is a non-empty array
  var k = randomInteger(0, items.length-1);
  return items[k];
}

// export functions, classes, variables by attaching them
// as properties to the special object 'exports'
exports.rollDice = rollDice;
exports.rollDiceN = rollDiceN;
exports.drawOne = drawOne;
