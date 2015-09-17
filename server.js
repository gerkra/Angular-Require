var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    res.sendfile('index.html');
});

var server = http.createServer(app);

server.listen(8888, function () {
    console.log('Server started on port: 8888');
});