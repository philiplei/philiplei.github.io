function sum(num) {
  var ans = 0;
  for (var k of num) { ans += k; }
  return ans;
}

var x = [1,2,3,4,5];
var ans = sum(x);
console.log('Correct? ', ans==15);
