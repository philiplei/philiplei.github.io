var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'vdi-philiplei.ipm.edu.mo',
  database : 'comp312',
  user     : 'peter',
  password : ''
});

conn.connect();

conn.query('DELETE FROM todo WHERE category=?', 
  [ 'studyX' ],
  function(err, result) {
    if (err) return err;
    console.log('DELETE result= ', result);
    // close connection only when no more query in progress
    conn.end();
  }
);