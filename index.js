//Include libs
var express = require('express');

//Initail lib objects
var webApp = express();

//Setup
require('./route.js')(express, webApp);

var webServer = webApp.listen(8080, function() {
      var host = webServer.address().address;
      var port = webServer.address().port;

      console.log('CEITL web server is listening on port %s\n', port);
});
