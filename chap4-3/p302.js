// p302.js
// - Download and save an image file from www.ipm.edu.mo

var fs = require('fs');
var request = require('request');

// options object pattern
// use a JS object to group named parameters
// encoding = null is required to get binary data
var options = {
  url: 'http://www.ipm.edu.mo/cntfiles/upload/images/common/campus/campusmap_btn_chi_un_img.jpg',
  encoding: null
};

request.get(options, (err, res, body) => {
  if (err) throw err;
  if (res.statusCode!==200) {
    console.log('HTTP status not ok. code = ', res.statusCode);
    return;
  }
  console.log('HTTP request is successful. Saving file...');
  fs.writeFile('campus.jpg', body, (err) => {
    if (err) throw err;
  });
});
