// app5.js
// Lecture time tables
var fs = require('fs');
var express = require('express');
var app = express();

class TimeTable {
	constructor () {
		var timetab = fs.readFileSync('tt.json');
		this.timetab = JSON.parse(timetab);
		console.dir(this.timetab, { depth: 4, colors: true});
	}
	findByCourse (code) {
		// code is course code, e.g. 'comp312'
    code = code.toUpperCase();
		for (var c of this.timetab.courses) {
			if (c.code==code) return c;
		}
		return undefined;
	}
	findByYear (year) {
		// year is string: '1', '2', '3' or '4'
		var ans = this.timetab.courses.filter((x)=>{ return (x.year==year); });
		console.dir(ans, {depth: 3, colors: true});
		return ans;
	}
}

var timetab = new TimeTable();
//timetab.findByYear('3');
var x = timetab.findByCourse('comp312');
console.dir(x);

// instead of .write() and .end()
app.get('/', function(req, res) {
	res.send({ a: 'hello world' });
});

// matches /user/543
app.get('/course/:code', function(req, res) {
	var out = `To retrieve lecture time of ${req.params.code}:`;
	var x = timetab.findByCourse(req.params.code);
	res.send(out + JSON.stringify(x));
});


// matches /admin, /admin/any/thing, /adminANYthing
app.get('/admin*', function(req, res) {
	res.send(`<!doctype html>
<html>
<body>
  <p>Admin page ${req.url}</p>
</body>
</html>`);
});

// matches /search?a=1&b=2
app.get('/search', function(req, res) {
	res.send('search page, with query= '+JSON.stringify(req.query));
});

// matches any URL
app.get('*', function(req, res) {
	res.send('this matches any thing');
})

app.get('/unreachable', function(req, res) {
	res.send('this route is never visited.');
})


app.listen(3000);


console.log('Server running at http://localhost:3000/');
