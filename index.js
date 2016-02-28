var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
	console.log("accessed");
}).get('/binary.min.js', function(req, res){
	res.sendFile('node_modules/binaryjs/dist/binary.min.js', { root: __dirname });
});
app.use(express.static('public'));

 

var PORT = process.env.PORT || 7754;
http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
