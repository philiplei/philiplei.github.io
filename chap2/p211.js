var N = [ 32, 53, 42, 25, 48, 10 ];

var a1 = N.map( (n)=>{ return n.toString(16); } );
/* alternative solutions */
var a1 = N.map( (n)=>n.toString(16) );
var a1 = N.map( function(n) { return n.toString(16); } );

var a2 = N.filter( (n)=> { return (n>=20)&&(n<=40); } );

var a3 = N.filter( (n)=> { return (n%2==0) } ).length;

var a4 = N.reduce( (a,b)=>{ return (a+b); } );
