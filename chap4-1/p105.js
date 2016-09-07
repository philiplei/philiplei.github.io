// p105.js
// asynchronous version of read file, process, and write file

var fs = require('fs');

fs.readFile('intro.txt', 'utf8', (err, data)=>{
  if (err) throw err;
  var newdata = data.replace(/MPI/g, 'IPM');
  fs.writeFile('change.txt', newdata, 'utf8', (err)=>{
    if (err) throw err;
  });
});
