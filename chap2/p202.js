function odd(n) {
  var ans = [];
  for (var k=1; k<=n; k+=2) {
    ans.push(k);
  }
  return ans;
}

var a = odd(1);
console.log(a); // should print [1]
console.log(odd(9)); // should print [1,3,5,7,9]
console.log(sum(odd(10*2-1))); // should print 100
