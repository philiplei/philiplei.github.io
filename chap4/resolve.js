var dns = require('dns');

dns.resolve('www.yahoo.com', (err, addresses) => {
  for (var a of addresses) {
    console.log('- '+a);
  }
});
