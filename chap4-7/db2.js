var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("todo.sqlite");

db.run('INSERT INTO task (due, what, category, done) VALUES (?,?,?,?)',
  [ '2016-11-11', 'comp312 test', 'studyX', 0 ],
  function(err) {
    if (err) throw err;
    console.log('INSERT result= ', this.lastID);
    var id = this.lastID;
    db.run('UPDATE task SET category=? WHERE id=?',
      ['study', id],
      function(err) {
	      if (err) throw err;
	      console.log('UPDATE result= ', this.changes);
    });
  }
);

db.close();
