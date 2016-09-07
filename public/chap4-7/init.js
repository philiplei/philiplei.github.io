var fs = require('fs');

var fname = 'todo.sqlite';
if (fs.exists(fname)) { fs.unlinkSync(fname); }
var sql = fs.readFileSync("todoinit.sql", "utf8");

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(fname);
db.exec(sql, function(err) {
  if (err) throw err;
})

db.close();
