
var express = require('express');
var path = require('path');
var app = express();

var rootpath = path.normalize(__dirname);

app.use(express.static(rootpath));

  app.get('*', function(req, res){
    res.sendFile(rootpath + '/public/index.html');
  });

app.listen(3000);
console.log('Listening on port 8080');
