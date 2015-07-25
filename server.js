var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('news', function(data) {
        console.log('server news', data);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

app.get('/', function (req, res) {
    io.emit('news', { hello: 'world' });
    res.send('Server');
});

var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
