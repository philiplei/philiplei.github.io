// p101.js
// return the largest number in an array
// assume at least 1 entry, and all entries are numbers
function largest (A) {
  var big=A[0];
  for (var i=1; i<A.length; i++) {
  	if (big<A[i]) big=A[i];
  }
  return big;
}

var N = [ 3, 7, 6, 8, 2, 5 ];

console.log('The largest is %d', largest(N));
