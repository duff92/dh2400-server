var express = require('express'),
    app = express(),
    httpServer = require('http').Server(app),
    io = require('socket.io')(httpServer),
    dgram = require('dgram');

var udpPort = process.env.UDPPORT || 3000,
    server = dgram.createSocket('udp4');

server.bind(udpPort);

server.on('listening', function(){
    console.log('UDP server started at', udpPort);
});

server.on('error', function(err){
    // handle error
    console.log("error", err);
});

io.on('connection', function(socket){
    console.log("a user connected with id", socket.id);
    server.on("message", function (msg) {
        socket.emit('message', {msg: msg.toString()});
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

app.use(express.static('./public/'));

httpServer.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port ' + (process.env.PORT || 3000));
});