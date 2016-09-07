var fs = require('fs');

fs.readFile('in.txt', 'utf8', (err, data)=>{
  if (err) throw err;
  console.log(data);
})

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
