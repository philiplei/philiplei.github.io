// p106.js
// combine in1.txt and in2.txt to out.txt

var fs = require('fs');

fs.readFile('in1.txt', 'utf8', (err, data1)=>{
  if (err) throw err;
  fs.readFile('in2.txt', 'utf8', (err, data2)=>{
    if (err) throw err;
    fs.writeFile('out.txt', data1+data2, 'utf8', (err)=>{
      if (err) throw err;
    });
  });
});
