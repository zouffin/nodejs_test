//var http = require('http')
//var url = require('url')

const config = require('./config/config')
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://"+config.mongo.host+":"+config.mongo.port+"/"+config.mongo.db, function(err, db) {
  if(!err) {
    console.log("Connected to mongodb");
  }
  else {
    console.log("ERROR: "+err);
  }
});


//var server = http.createServer(function(req, res) {
//  res.writeHead(200, {"Content-Type": "text/plain"});
//  console.log(req.url);
//  res.end('Salut tout le monde !');
//});


//server.listen(8001);
