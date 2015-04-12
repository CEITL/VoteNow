//Include libs
var express = require('express');
var socket = require('socket.io');
var fs = require('fs');

//Initail lib objects
var webApp = express();

//Setup
require('./route.js')(express, webApp);

var webServer = webApp.listen(8081, function() {
      var host = webServer.address().address;
      var port = webServer.address().port;

      console.log('CEITL server is listening on port %s\n', port);
});


var io = socket(webServer);
var clients = {};
var scores = {};
var candidates = JSON.parse(fs.readFileSync('./www/beautyCandidateData.json', 'utf8'));
for(var element in candidates) {
      var obj = candidates[element];
      if(obj.hasOwnProperty('CandidateID')) {
          scores[obj.CandidateID] = { 'Plus': 0, 'Minus': 0 }; 
      }
}

io.on('connect', function(socket) {
      
      socket.on('do_connect', function(data) {
            clients[socket.id] = socket;
            console.log('socket connected(%s).', socket.id);
            socket.emit('calcute', scores);
            socket.broadcast.emit('calcute', scores);
      });

      socket.on('disconnect', function() {
            if(typeof clients[socket.id] !== 'undefined') {
                  var client = clients[socket.id];
                  delete clients[socket.id];
                  console.log('socket disconnected(%s).', client.id);
            }
      });

      socket.on('vote', function(data) {
            var candidateID = data.Candidate;
            scores[candidateID].Plus += data.votePlus;
            scores[candidateID].Minus += data.voteMinus;
            socket.emit('calcute', scores);
            socket.broadcast.emit('calcute', scores);
      });
});
