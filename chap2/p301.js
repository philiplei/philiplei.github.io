// regular expression for 2-6

var re1 = /\d{1,4}/
var re2 = /[A-Z][a-z]+/
var re3 = /[A-Z][a-z]+[A-Z][a-z]+/
var re4 = /\d\d-\d\d-\d\d\d\d/
var re5 = /\w+\.(doc|docx|ppt|pptx)/   // does not allow space in file name

// this accept empty string
var re6 = /b?(ab)*a?/
// this does not accept empty string
var re6 = /(a(ba)*b?)|(b(ab)*a?)/

var re7 = /(\{\s*\})|(\{\s*\w+\s*:\s*\d+\s*(,\s*\w+\s*:\s*\d+\s*)*\})/
