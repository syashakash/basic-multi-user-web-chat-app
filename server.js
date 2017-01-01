var PORT = process.env.PORT || 3000;
var __express = require('express');
var app = __express();
var __http = require('http').Server(app);

app.use(__express.static(__dirname + '/public'));

__http.listen(PORT, function() {
  console.log("SERVER STARTED");
});
