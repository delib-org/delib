var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var models  = require('../models/index');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  models.message.findAll()
      .then(function(messages){
        messages.forEach(function (message) {
          io.emit('chat message', message.messageContent);
        });
      });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    models.message.create({messageContent: msg});
  });
});

io.emit('some event', { for: 'everyone' });

models.DBmediator.sync()
    .then(function () {
        var server = http.listen(app.get('port'), function() {
            console.log('Express server listening on port ' + server.address().port);
            //debug('Express server listening on port ' + server.address().port);
        });
    });

