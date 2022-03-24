var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello");
    res.end("<h1>hello</h1>");
  }).listen(3000);