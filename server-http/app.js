var http = require('http');
var fs = require('fs');
var url = require('url');


// var server = http.createServer(function(req, resp){
//   resp.writeHead(200, {'Content-Type': 'text/html'});

//   resp.write('<h1>Hello World</h1>');
//   resp.end();
// }).listen(3000);

// server.listen(3000);

// var server = http.createServer(function(req, resp){

//     fs.readFile('index.html', function (err, data){
//       resp.writeHead(200, {'Content-Type': 'text/html'});  
//       resp.write(data);
//       resp.end();
//     });
// }).listen(3000);



var server = http.createServer(function(req, resp){
  var url_parts = url.parse(req.url);
  var path = url_parts.pathname;

  fs.readFile(__dirname + path, function (err, data){
    if (err) {
      resp.writeHead(404, {'Content-Type': 'text/html'});  
      resp.write('Not Found');
    } else {
    resp.writeHead(200, {'Content-Type': 'text/html'});  
    resp.write(data);
    }
    resp.end();
  });
}).listen(3000);