//Your task is to build a Node server application that handles the following HTTP requests and sends back the correct HTTP response. Where appropriate, your application must read the correct data from the `pets.json` file and include it in the response body. Additionally, your application must send the appropriate response status code and `Content-Type` header.


var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile(petsPath, 'utf8', function(err, petsData) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      res.setHeader('Content-Type', 'application/json');
      res.end(petsData);
    });
  }


  //specified index
  else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile(petsPath, 'utf8', function(err, petsData) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var pets = JSON.parse(petsData);
      var petsJSON = JSON.stringify(pets[0]);

      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile(petsPath, 'utf8', function(err, petsData) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var pets = JSON.parse(petsData);
      var petsJSON = JSON.stringify(pets[1]);

      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
