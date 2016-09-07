// app.js: a sample web app for CRUD on task management

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("todo.sqlite");

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// Use handlebars.js template engine to render view
app.set('view engine', 'hbs');

// the following routes implement the controller in this app.

app.get('/', (req, res) => {
  res.redirect('/list.html');
});

app.get('/list.html', (req, res) => {
  db.all("SELECT * FROM task ORDER BY due DESC", function(err, rows) {
    if (err) throw err;
    res.render('list', { tasks: rows } );
  });
});

app.post('/add', (req, res) => {
  if (req.body.due===undefined || req.body.what===undefined) {
    res.status(500).send('Cannot add new. content: '+JSON.stringify(req.body));
    return;
  }
  var obj = { due: req.body.due, what: req.body.what, category: req.body.category, done: req.body.done };
  db.run("INSERT INTO task (due, what, category, done) VALUES (?,?,?,?)",
    [obj.due, obj.what, obj.category, obj.done],
    function(err) {
      if (err) throw err;
      //res.send('Add operation is successful. POST content '+JSON.stringify(req.body));
      res.redirect('/list.html');
  });
});

app.get('/edit.html', (req, res) => {
  var id = req.query.id;
  db.all("SELECT * FROM task WHERE id=?", [id], function(err, rows) {
    if (err) throw err;
    if (rows.length==0)
      res.send('Cannot find the record');
    else
      res.render('edit', rows[0]);
  });
});

app.post('/update', (req, res) => {
  if (req.body.id===undefined || req.body.due===undefined
         || req.body.what===undefined) {
    res.send('Cannot update. '+'content '+JSON.stringify(req.body), 500);
    return;
  }
  var obj = { due: req.body.due, what: req.body.what };
  obj.id = parseInt(req.body.id, 10);
  obj.category = req.body.category;
  obj.done = parseInt(req.body.done,10);
  //console.log(obj);
  db.run("UPDATE task SET due=?, what=?, category=?, done=? WHERE id=?",
    [obj.due, obj.what, obj.category, obj.done, obj.id],
    function (err) {
      if (err) throw err;
      res.redirect('/list.html');
  });
});

app.post('/delete', (req, res) => {
  if (req.body.id===undefined) {
    res.status(500).send('Cannot delete. content: '+JSON.stringify(req.body));
    return;
  }
  var id = parseInt(req.body.id,10);
  db.run("DELETE FROM task WHERE id=?", [id], function(err) {
    res.redirect('/list.html');
  });
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
/*
process.on('SIGINT', () => {
  console.log('Server closing ...');
  server.close();
}); */
/*
server.on('close', ()=>{
  console.log('closing...')
});
*/
