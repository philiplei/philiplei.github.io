var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'vdi-philiplei.ipm.edu.mo',
  database : 'comp312',
  user     : 'peter',
  password : ''
});
/*var conn = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'philiplei',
  password : 'fili312'
});*/

conn.connect();

conn.query('SELECT 1 + 2 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

conn.end();