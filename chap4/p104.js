// p104.js
// synchronous version of read file, process and write file.
var fs = require('fs');

var data = fs.readFileSync('intro.txt', 'utf8' );
var newdata = data.replace(/MPI/g, 'IPM');
fs.writeFileSync('change.txt', newdata, 'utf8');
