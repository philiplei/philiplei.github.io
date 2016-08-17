// first Node.js program

var k=6;
for (i=1; i<=k; i++) {
  var line="";
  for (j=1; j<=k; j++) {
    if (i>=j) {
      line = line+"* ";
    } else {
      line = line+"  ";
    }
  }
  console.log(line);
}