var PORT = process.env.PORT || 3000;
var __express = require('express');
var app = __express();
var __http = require('http').Server(app);
var io = require('socket.io')(__http);

app.use(__express.static(__dirname + '/public'));

io.on('connection', function() {
    console.log("USER CONNECTED via SOCKET");
});

__http.listen(PORT, function() {
    console.log("SERVER STARTED");
});
