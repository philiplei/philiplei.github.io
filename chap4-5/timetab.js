// this variable is private for this module

var timetab = {
  acadYear: '2015/16',
  semester: 1,
  courses:
   [ { lectures:
        [ { room: 'A205', dow: 1, start: '14:30', end: '16:00' },
          { room: 'A317', dow: 5, start: '16:00', end: '17:30' } ],
       year: 1,
       code: 'COMP111',
       title: 'Introduction To Computing',
       instructor: 'Yip Lee Wah' },
     { lectures: [ { room: 'A205', dow: 4, start: '14:30', end: '17:30' } ],
       year: 1,
       code: 'COMP112',
       title: 'Programming I',
       instructor: 'Ke Wei' },
     { lectures:
        [ { room: 'A203', dow: 1, start: '16:00', end: '17:30' },
          { room: 'A211', dow: 2, start: '14:30', end: '16:00' } ],
       year: 1,
       code: 'COMP113',
       title: 'Web Technologies',
       instructor: 'Philip Lei' },
     { lectures:
        [ { room: 'A309', dow: 1, start: '09:30', end: '11:00' },
          { room: 'A317', dow: 5, start: '14:30', end: '16:00' } ],
       year: 1,
       code: 'MATH111',
       title: 'Essential Computer Mathematics',
       instructor: 'Edmund Yung' },
     { lectures:
        [ { room: 'A309', dow: 2, start: '10:00', end: '11:30' },
          { room: 'A309', dow: 2, start: '11:30', end: '13:00' } ],
       year: 1,
       code: 'MBUS100',
       title: 'Introduction To Business',
       instructor: 'Chui Sai Chak' },
     { lectures:
        [ { room: 'A301', dow: 1, start: '11:00', end: '13:00' },
          { room: 'A301', dow: 4, start: '11:00', end: '13:00' } ],
       year: 1,
       code: 'MENG111',
       title: 'English I',
       instructor: 'Ines Lau' },
     { lectures:
        [ { room: 'A202', dow: 2, start: '11:30', end: '13:00' },
          { room: 'A309', dow: 4, start: '10:00', end: '11:30' } ],
       year: 2,
       code: 'COMP211',
       title: 'Database Design',
       instructor: 'Calana Chan' },
     { lectures:
        [ { room: 'A312', dow: 4, start: '14:30', end: '16:00' },
          { room: 'A202', dow: 4, start: '16:00', end: '17:30' } ],
       year: 2,
       code: 'COMP212',
       title: 'Programming Ii',
       instructor: 'Benjamin Ng' },
     { lectures:
        [ { room: 'A312', dow: 2, start: '10:00', end: '11:30' },
          { room: 'A312', dow: 4, start: '11:30', end: '13:00' } ],
       year: 2,
       code: 'COMP213',
       title: 'Operating Systems',
       instructor: 'Lam Chan Tong' },
     { lectures:
        [ { room: 'A202', dow: 5, start: '10:00', end: '11:30' },
          { room: 'A202', dow: 5, start: '11:30', end: '13:00' } ],
       year: 2,
       code: 'COMP214',
       title: 'Computer Networks',
       instructor: 'Yang Xu' },
     { lectures:
        [ { room: 'A317', dow: 1, start: '14:30', end: '16:00' },
          { room: 'A317', dow: 1, start: '16:00', end: '17:30' } ],
       year: 2,
       code: 'MATH211',
       title: 'Statistics I',
       instructor: 'Edmund Yung' },
     { lectures:
        [ { room: 'A301', dow: 2, start: '14:30', end: '16:30' },
          { room: 'A301', dow: 5, start: '14:30', end: '16:30' } ],
       year: 2,
       code: 'MENG211',
       title: 'English III',
       instructor: 'Ines Lau' },
     { lectures:
        [ { room: 'A210', dow: 2, start: '10:00', end: '11:30' },
          { room: 'A210', dow: 4, start: '11:30', end: '13:00' } ],
       year: 3,
       code: 'COMP311',
       title: 'Multimedia Application Development',
       instructor: 'Li Wenye' },
     { lectures:
        [ { room: 'A206', dow: 2, start: '11:30', end: '13:00' },
          { room: 'A210', dow: 4, start: '10:00', end: '11:30' } ],
       year: 3,
       code: 'COMP312',
       title: 'Internet Programming II',
       instructor: 'Philip Lei' },
     { lectures: [ { room: 'A303', dow: 1, start: '14:30', end: '17:30' } ],
       year: 3,
       code: 'COMP313',
       title: 'Project Management',
       instructor: 'Kam Wai Tak' },
     { lectures:
        [ { room: 'A318', dow: 4, start: '14:30', end: '16:00' },
          { room: 'A318', dow: 4, start: '16:00', end: '17:30' } ],
       year: 3,
       code: 'COMP314',
       title: 'Human Factors And User Interfaces',
       instructor: 'Wilson Ho Ka Chong' },
     { lectures:
        [ { room: 'A210', dow: 1, start: '10:00', end: '11:30' },
          { room: 'A210', dow: 1, start: '11:30', end: '13:00' } ],
       year: 3,
       code: 'COMP315',
       title: 'Performance Evaluation',
       instructor: 'Cheong Sio Tai' },
     { lectures:
        [ { room: 'A318', dow: 1, start: '10:00', end: '11:30' },
          { room: 'A318', dow: 1, start: '11:30', end: '13:00' } ],
       year: 3,
       code: 'COMP316',
       title: 'Introduction To Gaming Technology',
       instructor: 'Andrew Siu Ka Meng' },
     { lectures:
        [ { room: 'M315-Sydney', dow: 2, start: '14:30', end: '17:30' },
          { room: 'A315', dow: 5, start: '14:30', end: '17:30' } ],
       year: 3,
       code: 'MENG311',
       title: 'English V',
       instructor: 'Ho Lam' },
     { lectures:
        [ { room: 'A202', dow: 4, start: '10:00', end: '11:30' },
          { room: 'A202', dow: 4, start: '11:30', end: '13:00' } ],
       year: 4,
       code: 'COMP404',
       title: 'Ip Routing',
       instructor: 'Jacky Tang' },
     { lectures:
        [ { room: 'A321', dow: 4, start: '10:00', end: '11:30' },
          { room: 'A321', dow: 4, start: '11:30', end: '13:00' } ],
       year: 4,
       code: 'COMP405',
       title: 'Mobile Computing And Wireless Networks',
       instructor: 'Benjamin Ng' },
     { lectures:
        [ { room: 'A107', dow: 1, start: '16:00', end: '17:30' },
          { room: 'A115', dow: 5, start: '16:00', end: '17:30' } ],
       year: 4,
       code: 'COMP411',
       title: 'Digital Image And Video Processing',
       instructor: 'Li Wenye' },
     { lectures:
        [ { room: 'A114', dow: 1, start: '14:30', end: '16:00' },
          { room: 'A114', dow: 2, start: '14:30', end: '16:00' } ],
       year: 4,
       code: 'COMP412',
       title: 'Computer Security',
       instructor: 'Jacky Tang' },
     { lectures:
        [ { room: 'A207', dow: 2, start: '13:30', end: '14:30' },
          { room: 'A207', dow: 5, start: '17:30', end: '19:30' } ],
       year: 4,
       code: 'COMP413',
       title: 'Enterprise System And Application Development',
       instructor: 'Hoi Lap Man' },
     { lectures:
        [ { room: 'A312', dow: 2, start: '16:00', end: '17:30' },
          { room: 'A202', dow: 5, start: '14:30', end: '16:00' } ],
       year: 4,
       code: 'COMP414',
       title: 'Gaming Technology II',
       instructor: 'Philip Lei' } ] };


//console.dir(timetab, { depth: 4, colors: true });

// add day-of-week names and boolean property lab
function enrichData(timetab) {
  var dowName = [ '', 'Mon', 'Tue','Wed', 'Thu', 'Fri' ];
  for (var c of timetab.courses) {
    for (var lec of c.lectures) {
      lec.dowName = dowName[lec.dow];
      lec.lab = (lec.room=='A210' || lec.room=='A203' || lec.room=='A206');
    }
  }
  return timetab;
}

timetab = enrichData(timetab);

function getLectures () {
  var lect = [];
  for (var c of timetab.courses) {
    for (var l of c.lectures) {
      var x = Object.assign({}, l);
      x.year = c.year;
      x.code = c.code;
      x.title = c.title;
      x.instructor = c.instructor;
      lect.push(x);
    }
  }
  return lect;
}

function searchCourseByYear (year) {
  var courses = timetab.courses;
  var coursesInTheYear = courses.filter((c)=>c.year==year);
  return {
    acadYear: timetab.acadYear,
    semester: timetab.semester,
    courses: coursesInTheYear
  };
}

function searchCourseByInstructor (instructor) {
  var courses = timetab.courses;
  var coursesTaughtByInstructor = courses.filter((c)=>c.instructor==instructor);
  return {
    acadYear: timetab.acadYear,
    semester: timetab.semester,
    courses: coursesTaughtByInstructor
  };
}


exports.searchByYear = searchCourseByYear;
exports.searchByInstructor = searchCourseByInstructor;
