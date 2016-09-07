// app6.js
// Handling POST form data submission

var fs = require('fs');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/form1.html', (req, res) => {
  res.send(`<!doctype html>
<html>
<body>
  <p>Enter a message to append to the log file:</p>
  <form action='/append' method='POST'>
    <p><input name='mesg' type='text' size='100'/>
    <p><button type='submit'>Append to log</button>
  </form>
</body>
</html>`);
});

app.post('/append', (req, res) => {
  var mesg = req.body.mesg;
  fs.appendFile(__dirname+'/log.txt', mesg+'\n', 'utf8', (err)=>{
    if (err) throw err;
    res.send(`Append successful.
      You can <a href="/getlog">retrieve the log</a> now.`);
  })
});

app.get('/getlog', (req, res) => {
  res.sendFile(__dirname+'/log.txt');
})

// matches any URL
app.get('*', function(req, res) {
  res.status(404).send(`<!doctype html>
<html>
<body>
  <p>This page is not available: ${req.url}</p>
  <p>Try the following paths:</p>
  <ul>
    <li><a href="/form1.html">/form1.html</a> - a form to append a line to logs
    <li><a href="/getlog">/getlog</a> - retrieve the log
  </ul>
</body>
</html>`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
