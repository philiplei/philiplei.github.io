var fs = require('fs');
var cheerio = require('cheerio');
var titleCase = require('title-case');

fs.readFile('timetab.html', 'utf8', (err, data)=>{
  parse(data);
});

// todo: run 'title-case'

function parse(data) {
  var $ = cheerio.load(data);
  // the first two rows are header, the last two rows are footer.
  // remove them.
  var rows = $('body>table tr').slice(2,-2);
  // each row
  var c = undefined;
  var all = [];
  for (let k=0; k<rows.length; k++) {
    var r = rows.eq(k);
    let room; let time;
    let sun_pos;
    if (r.find('td').eq(0).attr('colspan')=='4') {
      room = r.find('td').eq(2).text().trim();
      time = r.find('td').eq(4).text().trim();
      sun_pos = 5;
    } else {
      if (c !== undefined) {
        all.push(c);
      }
      c = { lectures: [] };
      c.year = r.find('td').eq(0).text();
      c.year = parseInt(c.year, 10);
      c.code = r.find('td').eq(2).text();
      // remove session code from course code
      c.code = c.code.substring(0,7);
      c.title = r.find('td').eq(3).text();
      c.title = titleCase(c.title);
      c.instructor = r.find('td').eq(4).text().trim();
      c.instructor = titleCase(c.instructor);
      room = r.find('td').eq(5).text().trim();
      time = r.find('td').eq(7).text().trim();
      sun_pos = 8;
    }
    if (room.startsWith('A318')) room = 'A318';
    //9,13;
    // sun - sat. 0 - 6. 8+x
    for (let d=0; d<7; d++) {
      let cell = r.find('td').eq(sun_pos+d);
      if (cell.is(':has(img)')) {
        //console.log('day is ', d);
        // create a new object for a lecture on each dow
        let lect = { room: room, dow: d,
          start: time.substring(0,5), end: time.substring(6) };
        c.lectures.push(lect);
      }
    }
    //console.log(year, classcode, subject, instructor, room);
  }
  if (c !== undefined) {
    all.push(c);
  }
  var timetab = {
    acadYear: "2016/17",
    semester: 1,
    courses: all
  };
  console.dir(timetab, { depth: 4, colors: true});
  fs.writeFile('tt.json', JSON.stringify(timetab), 'utf8', ()=>{});
}
