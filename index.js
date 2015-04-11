//Include libs
var express = require('express');
var socket = require('socket.io');

//Initail lib objects
var webApp = express();

//Setup
require('./route.js')(express, webApp);

var webServer = webApp.listen(8080, function() {
      var host = webServer.address().address;
      var port = webServer.address().port;

      console.log('CEITL server is listening on port %s\n', port);
});


var io = socket(webServer);
var clients = {};

io.on('connect', function(socket) {
      
      socket.on('do_connect', function(data) {
            clients[socket.id] = socket;
            console.log('socket connected(%s).', socket.id);
      });

      socket.on('disconnect', function() {
            if(typeof clients[socket.id] !== 'undefined') {
                  var client = clients[socket.id];
                  delete clients[socket.id];
                  console.log('socket disconnected(%s).', client.id);
            }
      });
});
