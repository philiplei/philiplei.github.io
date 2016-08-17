var fs = require('fs');
var data = fs.readFileSync('in.txt', { encoding: 'utf8' } );
console.log('File content: ', data);
/*

fs.writeFile('out.txt', data, 'utf8', (err)=> { })
fs.appendFile is similar
JSON.parse( )
JSON.stringify()

what i can do:
- read some data, process them, and write output to file

request Module
- send GET request, get response.
- request.get(url, (err, resp, body)=> { })
*/
