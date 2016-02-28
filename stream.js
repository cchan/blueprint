var BinaryServer = require("binaryjs").BinaryServer;

var server = BinaryServer({port: 9375});
server.on('connection', function(client){
  client.on('stream', function(stream, meta){
    stream.pipe(process.stdout);
  }); 
});
