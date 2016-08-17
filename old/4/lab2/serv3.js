// serv3.js
// A node.js HTTP server that returns files in the current directory

var http = require("http"),  
    url = require("url"),  
    path = require("path"),  
    fs = require("fs"); 
   

http.createServer(function(req, resp) {
    console.log('Recv request '+req.method+' '+req.url);
    var urlPart = url.parse(req.url);
    if (urlPart.pathname==='/now') {
        getNow(req, resp);
    } else {
        serveStaticFile(req, resp);
    }
}).listen(3000);  
      
function getNow(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end('Now is '+Date());
}
  

function serveStaticFile(req, resp) {
    var pname = url.parse(req.url).pathname;  
    var filename = path.join(process.cwd(), pname);  
    fs.exists(filename, function(exists) {  
        if(!exists) {  
            resp.writeHead(404, {"Content-Type": "text/plain"});  
            resp.write("404 Not Found\n");  
            resp.end();  
            return;  
        }  
      
        fs.readFile(filename, function(err, filecontent) {  
            if(err) {  
                resp.writeHead(500, {"Content-Type": "text/plain"});  
                resp.write(err + "\n");  
                resp.end();  
                return;  
            }  
            var mimetype = guessMimeType(filename);
            resp.writeHead(200, { "Content-Type": mimetype } );  
            resp.write(filecontent, "binary");  
            resp.end();  
        });  
    });
}

function guessMimeType(filename) {
    if ((/\.html?$/i).test(filename)) return "text/html";
    if ((/\.js$/i).test(filename)) return "application/javascript";
    return "text/plain";    
}

console.log('Server running at http://localhost:3000/');