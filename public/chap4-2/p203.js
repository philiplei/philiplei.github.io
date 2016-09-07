// p203.js
// read a text file line by line

// This example requires the module 'linereader'
// before first run, install the module by 'npm install linereader'
var LineReader = require('linereader');

var lr = new LineReader('./introx.txt');

lr.on('error', (err) => {
  console.log("== error ==");
  console.dir(err, {colors: true});
  lr.close();
});

lr.on('line', (lineno, line) => {
  console.log(`${lineno}  ${line}`);
});

lr.on('end', () => {
  console.log("== end ==");
});
