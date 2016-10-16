// p204.js
// read a text file line by line

// This example requires the module 'linereader'
// before first run, install the module by 'npm install linereader'
var LineReader = require('linereader');

var lr = new LineReader('./intro.txt');

lr.on('error', function (err) {
  console.log(err);
  lr.close();
});

lr.on('line', function (lineno, line) {
  if (lineno <= 12) {
    console.log(`${lineno}  ${line}`);
  } else {
    lr.close();
  }
  lr.pause();
  setTimeout(function () {
    lr.resume();
  }, 100);
});

lr.on('end', function () {
  console.log("== end ==");
});
