
var express = require('express');
var path = require('path');
var app = express();

var rootpath = path.join(__dirname, 'public');

app.use(express.static(rootpath));

  app.get('/', function(req, res){
    res.sendFile(rootpath + '/index.html');
  });

app.listen(3000);
console.log('Listening on port 3000');
