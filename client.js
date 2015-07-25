var express = require('express');
var app = express();

var socket = require('socket.io-client')('http://localhost:3000', {
    'reconnect': false
});

socket.on('connect', function(){
    console.log('client connect');
});

socket.on('news', function(data){
    console.log('client news', data);
});

socket.on('disconnect', function(){
    console.log('client disconnect');
});

app.get('/', function (req, res) {
    socket.emit('news', { hello: 'world, client' });
    res.send('Client!');
});

var server = app.listen(3090, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
