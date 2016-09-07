// p103.js
// show amount of free memory every second
var os = require('os');

function tick() {
  var now = new Date();
  var time = now.toTimeString().substring(0,8);
  var fm = os.freemem() / 1024;
  console.log(`${time} - ${fm}k`);
}

console.log('Start monitoring free memory. Ctrl-C to quit.')
setInterval(tick, 1000);
