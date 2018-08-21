var express = require('express');
var http = require('http');
var config = require('./config');

var app = express();

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

http.createServer(app).listen(config.serverConfiguration.httpPort);

console.log('Servers listens to http://localhost:' + config.serverConfiguration.httpPort);
