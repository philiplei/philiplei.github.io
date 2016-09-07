var comp312 = [
  { name: 'Peter', test: 80, exam: 70 },
  { name: 'John', test: 60, exam: 65 },
  { name: 'Mary', test: 90, exam: 85 },
  { name: 'Christine', test: 70, exam: 76 }
];

var a1 = comp312.map( (p)=>{ return p.name } );
var a2 = comp312.filter( (p)=>{ return p.test>75 } );
var a3 = comp312.filter(
  (p)=>{ return p.test>p.exam }
).map(
  (p)=>{ return p.name }
);

var a4 = comp312.map ( (p) => {
  return {
    name: p.name,
    final: p.test * 0.6 + p.exam * 0.4
  };
} );

// sort in descending order of exam mark
var a5 = comp312.sort( (p1, p2) => {
  if (p1.exam>p2.exam) return -1;
  if (p1.exam<p2.exam) return 1;
  return 0;
} );

/* alternative solution */
var a5 = comp312.sort( (p1, p2) => {
  return p2.exam-p1.exam
} );


var a6 = comp312.reduce( (p1, p2) => {
  if (p1.exam>p2.exam) return p1;
  return p2;
} );

/* alternative solution */
// sort in descending order of exam mark, then
// retrieve the first record, which has the highest exam mark
var a6 = comp312.sort( (p1, p2) => {
  return p2.exam-p1.exam
} )[0];

var a7 = comp312.map(
  (p) => { return p.test }
).reduce(
  (t1, t2)=> { return t1+t2 }
) / comp312.length;
