// model for connecting to mysql server

var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'vdi-philiplei.ipm.edu.mo',
  database : 'comp312',
  user     : 'peter',
  password : ''
});
conn.connect();


function searchEvent(id, callback) {
  conn.query('SELECT * FROM todo WHERE id=?', 
    [id],
    function(err, rows, fields) {
      if (err) return callback(err, null);
      return callback(null, rows );
    }
  );
}

// callback(err, result)
function getEvents(options, callback) {
  conn.query('SELECT * FROM todo', function(err, rows, fields) {
    if (err) return callback(err, null);
    return callback(null, { count: rows.length, data: rows } );
  });
/*  

  var events = todoDB.todos;
  var re = /^\d\d\d\d-\d\d-\d\d$/;
  if (re.test(options.start)) {
    events = events.filter(function(x) { return (x.due>=options.start); });
  }
  if (re.test(options.end)) {
    events = events.filter(function(x) { return (x.due<=options.end); });
  }  
  return { total: todoDB.total, data: events };*/
}

function updateEvent(e, callback) {
  conn.query('UPDATE todo SET due=?, task=?, category=?, priority=? WHERE id=?', 
    [ e.due, e.task, e.category, e.priority, e.id ],
    function(err, result) {
      if (err) return callback(err, null);
      return callback(null, result );
    }
  );
}

function deleteEvent(id, callback) {
  conn.query('DELETE FROM todo WHERE id=?', 
    [ id ],
    function(err, result) {
      if (err) return callback(err, null);
      return callback(null, result);
    }
  );  
}

function addEvent(e, callback) {
  // id is auto-generated
  conn.query('INSERT INTO todo (due, task, category, priority) VALUES (?,?,?,?)', 
    [ e.due, e.task, e.category, e.priority ],
    function(err, result) {
      if (err) return callback(err, null);
      return callback(null, result);
    }
  );  
}

/*
getEvents({}, function(err, ans) {
  if (err) console.log(err);
  else
    console.log(ans);
  // event loops quit only after connection is closed.
  conn.end();
})*/

/*
getEvents({}, function(err, ans) {
  if (err) console.log(err);
  else {
    console.log(ans);
    var e = ans.data[0];
    e.task += ' (x)';
    updateEvent(e, function (err, ans) {
      if (err) console.log(err);
      else console.log(ans);
      // event loops quit only after connection is closed.
      conn.end();
    });
  }
});
*/

/*
addEvent({due: '2014-10-10', task: 'new new', category: 'bigday', priority: 5}, function(err, ans) {
  if (err) console.log(err);
  else console.log(ans);
  // event loops quit only after connection is closed.
  conn.end();
});
*/

/*
deleteEvent(6, function(err, ans) {
  if (err) console.log(err);
  else console.log(ans);
  // event loops quit only after connection is closed.
  conn.end();
});
*/
/*
searchEvent(2, function(err, ans) {
  if (err) console.log(err);
  else console.log(ans);
  // event loops quit only after connection is closed.
  conn.end();
});
*/


exports.addEvent = addEvent;
exports.searchEvent = searchEvent;
exports.getEvents = getEvents;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;

