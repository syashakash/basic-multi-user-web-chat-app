var PORT = process.env.PORT || 3000;
var __express = require('express');
var app = __express();
var __http = require('http').Server(app);
var io = require('socket.io')(__http);
var __moment = require('moment');

app.use(__express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log("USER CONNECTED via SOCKET");
    socket.on('message', function(message) {
        message.timeStamp = __moment().valueOf();
        console.log("Message received: " + message.text);
        io.emit('message', message);
    });

    socket.emit('message', {
        text: 'we will we will rock you',
        timeStamp: __moment().valueOf()
    });
});

__http.listen(PORT, function() {
    console.log("SERVER STARTED");
});
