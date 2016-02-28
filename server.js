var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");


var PORT = process.env.PORT || 8080;
http.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
app.use(express.static('public'));


io.on('connection', function(socket){
	socket.on('login', function(data){
		socket.userdata = data;
		console.log('Added user');
	});
	socket.on('disconnect', function(data){
		console.log('Disconnected user');
	});
	socket.on('pos', function(data){
		if(data.x === null || data.y === null)
			return;
		console.log("data", data.x, data.y);
	});
});

