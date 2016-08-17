var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'vdi-philiplei.ipm.edu.mo',
  database : 'comp312',
  user     : 'peter',
  password : ''
});

conn.connect();

conn.query('INSERT INTO todo (due, task, category, priority) VALUES (?,?,?,?)', 
  [ '2014-11-11', 'comp312 test', 'studyX', 5 ],
  function(err, result) {
    if (err) return err;
    console.log('INSERT result= ', result);
    var id = result.insertId;
    conn.query('UPDATE todo SET priority=? WHERE id=?',
      [10, id],
      function(err, result) {
	    if (err) return err;
	    console.log('UPDATE result= ', result);
	    // close connection only when no more query in progress
	    conn.end();
    });
  }
);