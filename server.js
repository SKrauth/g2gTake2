var express = require("express");
var server = express();

server.use(express.static(__dirname+"/public"));

server.get("/", function(req, res){
  res.sendFile("public/index.html");
});

server.get("/focus", function(req, res){
  res.sendFile(__dirname+"/public/html/pages/focus.html")
});

server.get("/list", function(req, res){
  res.sendFile(__dirname+"/public/html/pages/list.html")
});

server.get("/form", function(req, res){
  res.sendFile(__dirname+"/public/html/pages/ratingForm.html")
});


server.listen(8080, function(){
  console.log("Server now listening on port 8080");
});
