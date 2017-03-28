var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');


  fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
    var pets = JSON.parse(petsJSON);
    app.get('/pets', function(req, res) {
    res.send(pets);
  });


  app.get('/pets/:id',(req, res)=>{
    let id = req.params.id;
    if(!isNaN(id)&& id >= 0 && id <pets.length){
      res.send(pets[id])
    }else{
      res.set('Content-Type', 'text/plain')
      res.sendStatus(404)
    }
  })
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
