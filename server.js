var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));

var PORT = process.env.PORT || 8080;

http.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
