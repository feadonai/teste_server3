var express = require('express');

var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var shortId = require('shortid');

app.use(express.static(_dirname));
//
//inicio server
//
io.on('connection', function(socket){

socket.on("JOIN_GAME", function(pack){
  var currentPlayer = {
    id: pack.id,
    name: pack.namePlayer
  };
  socket.emit("JOIN_GAME_SUCCES",currentPlayer)
});


});//end connection
//
//fim server
//


http.listen(process.env.PORT || 3000, function(){
  console.log("server listen in 3000");
});
  console.log("-----------------------server is running-----------------------");
