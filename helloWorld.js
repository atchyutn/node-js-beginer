/* Hello, World! program in node.js */
var http = require('http');

http.createServer(function(request, response){

  //Create HTTP response header
  //HTTP status : 200 :ok
  //content type: text/plain
  response.writeHead(200,{'Content-Type': 'text/plain'});

  response.end('Hello World\n');
}).listen(3000);

//this will print the console statements
console.log('server is running at http://127.0.0.1:3000/')