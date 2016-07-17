var express = require("express");
var app = express();

// must specify options hash even if no options provided!
var phpExpress = require('php-express')({

  // assumes php is in your PATH
  binPath: 'php'
});

// set view engine to php-express
app.set('views', './public/php');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
  res.sendFile("public/index.html");
});

app.get("/cdn", function(req, res){
  res.sendFile(__dirname+"/public/CDNdex.html");
})

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('PHPExpress app listening at http://%s:%s', host, port);
});