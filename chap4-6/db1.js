var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("todo.sqlite");
/*
db.each("SELECT * FROM task ORDER BY what", function(err, row) {
  if (err) throw err;
  console.log(row.due + ": " + row.what);
});

db.all("SELECT * from task", function(err, rows) {
  if (err) throw err;
  console.dir(rows);
})
*/
db.all("SELECT * FROM task WHERE done=? ORDER BY what", [0], function(err, rows) {
  if (err) throw err;
  console.dir(rows);
});

db.close();
