//Include libs
var express = require('express');

//Initail lib objects
var webApp = express();

//Setup
require('./route.js')(webApp);

var webServer = webApp.listen(8080, function() {
      var host = webServer.address().address;
      var port = webServer.address().port;

      console.log('Server running at http://%s:%s/', host, port);
});
