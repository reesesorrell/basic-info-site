var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var path = q.pathname
    if (path == "/") {
        fs.readFile('./pages/index.html', function(err, data) {
            if (err) {
                console.log('1' + err);
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else {
        fs.readFile("./pages" + path + ".html", function(err, data) {
            if (err) {
                console.log('2' + err);
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }

}).listen(8080);