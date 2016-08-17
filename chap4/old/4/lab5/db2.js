var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'vdi-philiplei.ipm.edu.mo',
  database : 'comp312',
  user     : 'peter',
  password : ''
});

conn.connect();

conn.query('SELECT * FROM todo', function(err, rows, fields) {
  if (err) 
  	console.log(err);
  else {
  	console.log(rows);
  }
  conn.end();
});

//conn.end();