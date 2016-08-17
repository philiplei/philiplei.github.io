var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'vdi-philiplei.ipm.edu.mo',
  database : 'comp312',
  user     : 'peter',
  password : ''
});

conn.connect();

conn.query('SELECT * FROM todo WHERE category=?', [ 'study' ], function(err, rows, fields) {
  console.log(rows);
  //conn.end();
});

//conn.end();